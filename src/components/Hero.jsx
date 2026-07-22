import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { resumeData } from '../data/resume';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload, FiGlobe, FiTerminal } from 'react-icons/fi';
import MagneticButton from './MagneticButton';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      {/* Drifting Ambient Glow Blobs with Rich Opacity & Blur */}
      <motion.div
        className="hero-blob hero-blob-1"
        aria-hidden="true"
        animate={{
          x: [0, 35, -25, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="hero-blob hero-blob-2"
        aria-hidden="true"
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.92, 1.06, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="hero-blob hero-blob-3"
        aria-hidden="true"
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -15, 25, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Status Eyebrow Badge - Positioned ~80-100px below navbar */}
          <div className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            <span className="status-text">{resumeData.profile.availability} • {resumeData.profile.title}</span>
          </div>

          {/* Large Typographic Two-Weight Headline */}
          <h1 className="hero-headline">
            Hi, I'm <br />
            <span className="name-primary">Sharma </span>
            <span className="gradient-text name-accent">Manchiraju</span>
          </h1>

          {/* Terminal-Style Chip for Typed Role Line */}
          <div className="hero-role-chip" aria-label="Role Tagline">
            <FiTerminal className="chip-terminal-icon" aria-hidden="true" />
            <span className="role-prefix" aria-hidden="true">&gt; </span>
            <TypeAnimation
              sequence={[
                'Java Backend Developer',
                2200,
                'Spring Boot & REST API Specialist',
                2200,
                'Microservices & Database Developer',
                2200,
              ]}
              wrapper="span"
              speed={45}
              className="role-typing-text"
              repeat={Infinity}
            />
          </div>

          {/* Verbatim Bio Subtitle */}
          <p className="hero-subtitle">
            {resumeData.profile.heroTagline}
          </p>

          {/* Magnetic Action Buttons */}
          <div className="hero-actions">
            <MagneticButton href="#projects" className="btn btn-primary hero-btn-gradient" aria-label="View Projects">
              <span>View My Work</span>
              <FiArrowRight className="btn-icon" aria-hidden="true" />
            </MagneticButton>
            <MagneticButton
              href="/resume.pdf"
              download="Manchiraju_Ramanjenaya_Sharma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary hero-btn-outline"
              aria-label="Download Sharma Manchiraju Resume PDF"
            >
              <span>Download Resume</span>
              <FiDownload className="btn-icon" aria-hidden="true" />
            </MagneticButton>
          </div>

          {/* Social Links Row */}
          <div className="hero-socials" aria-label="Social Media Profiles">
            <a
              href={resumeData.profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="social-icon-btn"
              title="GitHub"
            >
              <FiGithub aria-hidden="true" />
            </a>
            <a
              href={resumeData.profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="social-icon-btn"
              title="LinkedIn"
            >
              <FiLinkedin aria-hidden="true" />
            </a>
            <a
              href={resumeData.profile.social.email}
              aria-label="Send Email to Sharma Manchiraju"
              className="social-icon-btn"
              title="Send Email"
            >
              <FiMail aria-hidden="true" />
            </a>
            <a
              href={resumeData.profile.social.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Vercel Portfolio Site"
              className="social-icon-btn"
              title="Live Vercel Portfolio"
            >
              <FiGlobe aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
