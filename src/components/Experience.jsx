import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import Section from './Section';
import { resumeData } from '../data/resume';
import './Experience.css';

const Experience = () => {
    return (
        <Section id="experience" title="Experience">
            <motion.div
                className="experience-list"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
            >
                {resumeData.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="experience-item"
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                        }}
                    >
                        <div className="exp-header">
                            <div>
                                <h3 className="exp-role">{exp.role}</h3>
                                <span className="exp-company">{exp.company}</span>
                            </div>
                            <span className="exp-date">{exp.dates}</span>
                        </div>
                        <div className="exp-location">{exp.location}</div>
                        <ul className="exp-description">
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};

export default Experience;
