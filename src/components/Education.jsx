import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { resumeData } from '../data/resume';
import './Education.css';

const Education = () => {
    return (
        <Section id="education" title="Education">
            <div className="education-grid">
                {resumeData.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        className="education-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="edu-icon">🎓</div>
                        <h3 className="edu-degree">{edu.degree}</h3>
                        <p className="edu-institution">{edu.institution}</p>
                        <div className="edu-meta">
                            <span className="edu-date">{edu.dates}</span>
                            <span className="edu-score">{edu.score}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
