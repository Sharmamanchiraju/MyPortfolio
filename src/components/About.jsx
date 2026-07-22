import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FiBriefcase, FiFolder, FiMapPin, FiCheckCircle, FiCode } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import TiltCard from './TiltCard';
import { cardScaleUpVariant, staggerContainerVariant, defaultViewport } from '../utils/motionVariants';
import './About.css';

const About = () => {
  const metaIcons = {
    Experience: <FiBriefcase aria-hidden="true" />,
    "Projects shipped": <FiFolder aria-hidden="true" />,
    Location: <FiMapPin aria-hidden="true" />,
    Availability: <FiCheckCircle aria-hidden="true" />,
  };

  return (
    <div className="about-section">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          eyebrowIcon={<FiCode aria-hidden="true" />}
          eyebrowText="ABOUT ME"
          title="Professional Background"
          subtext="Enterprise Java & Spring Boot developer delivering secure, production-grade backend web services."
        />

        <div className="about-grid">
          {/* Typographic Monogram Badge with Gradient Ring Frame & Ambient Glow */}
          <motion.div
            className="about-badge-wrapper"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="monogram-ambient-glow" aria-hidden="true" />
            <div className="about-monogram-badge" aria-label="Monogram Badge for Sharma Manchiraju">
              <div className="monogram-inner-card">
                <span className="monogram-letters">{resumeData.profile.initials}</span>
                <span className="monogram-sub">JAVA BACKEND</span>
              </div>
            </div>
          </motion.div>

          {/* About Copy & Verbatim Stat Chips */}
          <div className="about-content">
            <TiltCard maxTilt={6}>
              <motion.div
                className="about-bio-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="bio-heading">
                  Java Backend Developer with <span className="gradient-text">1+ Year Experience</span>
                </h3>
                <p className="bio-text">{resumeData.profile.bio}</p>
              </motion.div>
            </TiltCard>

            {/* 4 Stat Chips with 3D Tilt Card Wrappers */}
            <motion.div
              className="about-meta-grid"
              aria-label="Key Profile Stats"
              variants={staggerContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              {resumeData.metaCards.map((card) => (
                <TiltCard key={card.label} maxTilt={8}>
                  <motion.div className="meta-card glass-card" variants={cardScaleUpVariant}>
                    <div className="meta-icon">{metaIcons[card.label] || <FiBriefcase aria-hidden="true" />}</div>
                    <div className="meta-info">
                      <span className="meta-value">{card.value}</span>
                      <span className="meta-label">{card.label}</span>
                      <span className="meta-subtext">{card.subtext}</span>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
