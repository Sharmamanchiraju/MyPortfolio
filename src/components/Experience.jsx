import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section-wrapper experience-section" aria-label="Work Experience">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          eyebrowIcon={<FiBriefcase aria-hidden="true" />}
          eyebrowText="EXPERIENCE"
          title="Work History & Experience"
          subtext="Professional backend development experience building production REST APIs and enterprise features."
        />

        {/* Single-Role Clean Timeline Container */}
        <div className="timeline-container">
          {/* Vertical Scale-In Animated Timeline Line */}
          <motion.div
            className="timeline-line"
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
          />

          {resumeData.experience.map((exp) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              {/* Timeline Node with Pulsing Glow Ring */}
              <div className={`timeline-node ${exp.isCurrent ? 'current-node' : ''}`} aria-hidden="true">
                <div className="node-inner" />
              </div>

              {/* Experience Card */}
              <div className="timeline-content glass-card">
                <div className="exp-card-header">
                  <div>
                    <div className="role-title-row">
                      <h3 className="exp-role">{exp.role}</h3>
                      {exp.isCurrent && <span className="current-badge">• Current</span>}
                    </div>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>

                  <div className="exp-meta">
                    <span className="exp-meta-item">
                      <FiCalendar aria-hidden="true" /> {exp.dates}
                    </span>
                    <span className="exp-meta-item">
                      <FiMapPin aria-hidden="true" /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, bIndex) => (
                    <li key={bIndex}>
                      <FiCheckCircle className="bullet-icon" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Pill-Shaped Tech Tags with Hover Lift & Glow */}
                <div className="exp-tech-tags" aria-label="Technologies used in this role">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="exp-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
