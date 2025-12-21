import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { resumeData } from '../data/resume';
import './Projects.css';

const Projects = () => {
    return (
        <Section id="projects" title="Projects">
            <motion.div
                className="projects-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
            >
                {resumeData.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                        }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="project-header">
                            <h3 className="project-title">{project.title}</h3>
                            <span className="project-status">{project.status}</span>
                        </div>
                        <p className="project-role">
                            <span className="label">Role:</span> {project.role}
                        </p>
                        <p className="project-overview">{project.overview}</p>
                        <div className="project-contributions">
                            <h4>Key Contributions</h4>
                            <ul>
                                {project.contributions.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};

export default Projects;
