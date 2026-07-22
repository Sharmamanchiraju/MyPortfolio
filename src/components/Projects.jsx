import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import {
  FiFolder,
  FiFileText,
  FiBookOpen,
  FiBriefcase,
  FiCpu,
  FiCheck,
  FiStar,
} from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import TiltCard from './TiltCard';
import { cardScaleUpVariant, staggerContainerVariant, defaultViewport } from '../utils/motionVariants';
import './Projects.css';

const projectIcons = {
  FiFileText: <FiFileText aria-hidden="true" />,
  FiBookOpen: <FiBookOpen aria-hidden="true" />,
  FiBriefcase: <FiBriefcase aria-hidden="true" />,
  FiCpu: <FiCpu aria-hidden="true" />,
};

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          eyebrowIcon={<FiFolder aria-hidden="true" />}
          eyebrowText="PROJECTS"
          title="Backend Projects Shipped"
          subtext="Enterprise document signing, learning management, and AI agent workflow services."
        />

        {/* 4 Projects Cards Grid with 3D Tilt Micro-interactions */}
        <motion.div
          className="projects-grid"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {resumeData.projects.map((project) => {
            const isFeatured = project.id === 'proj-ai-trip-planner';

            return (
              <TiltCard key={project.id} maxTilt={6} className={isFeatured ? 'featured-project-tilt-wrapper' : ''}>
                <motion.div
                  className={`project-card glass-card ${isFeatured ? 'featured-project-card' : ''}`}
                  variants={cardScaleUpVariant}
                >
                  {/* Tech-Tag Header + Icon */}
                  <div className="project-tech-header">
                    <div className="header-left">
                      <div className="header-icon-box">
                        {projectIcons[project.icon] || <FiFolder aria-hidden="true" />}
                      </div>
                      {isFeatured && (
                        <span className="featured-pill-badge">
                          <FiStar className="star-icon" aria-hidden="true" /> Featured AI Project
                        </span>
                      )}
                    </div>
                    <div className="header-meta">
                      <span className="header-dates">{project.dates}</span>
                      <div className="header-badge">{project.badge}</div>
                    </div>
                  </div>

                  {/* Project Body */}
                  <div className="project-body">
                    <h3 className="project-title">{project.title}</h3>
                    <h4 className="project-subtitle">{project.subtitle}</h4>

                    {/* Verbatim Bullet Points */}
                    <div className="project-highlights">
                      {project.bullets.map((bullet, idx) => (
                        <div key={idx} className="highlight-item">
                          <FiCheck className="highlight-check" aria-hidden="true" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="project-tags" aria-label={`Tech stack for ${project.title}`}>
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
