import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import heroImage from '../assets/hero-avatar.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <motion.div
                    className="hero-text-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="hero-greeting">
                        <span className="wave">👋</span> Hi there, I'm
                    </div>

                    <h1 className="hero-name">Sharma Manchiraju</h1>

                    <div className="hero-role-wrapper">
                        <span className="role-prefix">I am a</span>
                        <TypeAnimation
                            sequence={[
                                'Back-End Developer',
                                1500,
                                'Java Developer',
                                1500,
                                'Full Stack Learner',
                                1500,
                            ]}
                            wrapper="h2"
                            speed={50}
                            className="hero-role"
                            repeat={Infinity}
                        />
                    </div>

                    <p className="hero-description">
                        Turning complex problems into efficient code.
                        Passionate about scalable systems and clean architecture.
                    </p>

                    <a href="https://drive.google.com/file/d/1fsXm6PIh_uN9xx7G4roHqdnM7rzSPjyK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-btn">
                        Resume <span className="btn-icon">➜</span>
                    </a>

                    <div className="social-links">
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
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="avatar-container">
                        <div className="avatar-glow"></div>
                        <div className="avatar-border"></div>
                        <img src={heroImage} alt="Sharma Manchiraju" className="hero-avatar" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
