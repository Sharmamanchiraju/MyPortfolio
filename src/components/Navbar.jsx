import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FiMenu, FiX, FiSend, FiSun, FiMoon } from 'react-icons/fi';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Impact', href: '#metrics' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  /* Scroll Progress Bar at very top of page */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  /* Active Section Tracking via IntersectionObserver with boundary fallbacks */
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.substring(1));
    const observerEntries = new Map();

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        observerEntries.set(entry.target.id, entry);
      });

      let bestId = '';
      let maxRatio = -1;

      observerEntries.forEach((entry, id) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          bestId = id;
        }
      });

      if (bestId) {
        setActiveSection(bestId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-15% 0px -40% 0px',
      threshold: [0.05, 0.2, 0.5],
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Boundary check: Top of page forces 'hero'
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
      // Boundary check: Bottom of page forces 'contact'
      else if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 60) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* Smooth Scroll on Nav Click accounting for Sticky Navbar Height */
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      const navbarOffset = 76;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setActiveSection(sectionId);
      setMobileMenuOpen(false);
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX, transformOrigin: '0%' }}
        aria-hidden="true"
      />

      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Monogram Badge */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="navbar-brand"
            aria-label="Sharma Manchiraju Portfolio Home"
          >
            <div className="brand-badge" aria-hidden="true">
              <span>{resumeData.profile.initials}</span>
            </div>
            <span className="brand-name">{resumeData.profile.name}</span>
          </a>

          {/* Desktop Navigation with Soft Glowing Gradient Pill */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <li key={item.label} className="nav-item">
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="nav-link-label">{item.label}</span>
                      {isActive && (
                        <motion.span
                          className="nav-active-pill"
                          layoutId="activeNavPill"
                          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Actions: Theme Toggle & CTA */}
          <div className="navbar-actions">
            {/* Light / Dark Mode Toggle Button */}
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <FiSun className="theme-icon sun" aria-hidden="true" />
              ) : (
                <FiMoon className="theme-icon moon" aria-hidden="true" />
              )}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn btn-secondary btn-sm navbar-cta"
              aria-label="Send a message to Sharma Manchiraju"
            >
              <FiSend className="cta-icon" aria-hidden="true" />
              <span>Let's Talk</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <nav className="mobile-nav" aria-label="Mobile Navigation">
              <ul>
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="mobile-nav-link"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
