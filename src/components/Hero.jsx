
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content-centered">
                {/* Greeting Top */}
                <div className="hero-greeting">
                    Hey <span className="wave-emoji">👋</span> I am
                </div>

                {/* Name Middle - Massive */}
                <h1 className="hero-name">
                    Sharma Manchiraju
                </h1>

                {/* Role Bottom - Transparent and Centered */}
                <div className="hero-role-wrapper">
                    <TypeAnimation
                        sequence={[
                            'Software Engineer',
                            2000,
                            'Full Stack Developer',
                            2000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        cursor={true}
                    />
                </div>

                <p className="hero-description">
                    Building the future of web applications with modern technologies.
                    Focused on performance, scalability, and user experience.
                </p>

                <div className="hero-actions">
                    <a href="https://drive.google.com/file/d/1fsXm6PIh_uN9xx7G4roHqdnM7rzSPjyK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="neon-btn primary">
                        Resume
                    </a>
                    <div className="social-links-hero">
                        <a href="https://github.com/Sharmamanchiraju" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/sharma-manchiraju-3109b8227/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:sharmamanchiraju02@gmail.com" className="social-icon">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
