import React from 'react';
import Section from './Section';
import { resumeData } from '../data/resume';
import './About.css';

const About = () => {
    return (
        <Section id="about" className="about-section">
            <div className="about-grid">
                <div className="about-column">
                    <h2 className="section-title">About Me</h2>
                    <p className="about-text">
                        {resumeData.profile.objective}
                    </p>
                </div>
                <div className="about-column">
                    <h2 className="section-title">What I'm Exploring</h2>
                    <p className="exploring-text">
                        {resumeData.profile.exploring}
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default About;
