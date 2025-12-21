import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from 'react-icons/fa';
import contactImage from '../assets/hero-cartoon-light.png'; // Reusing cartoon or use a new one if available
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">
        {/* Left Side: Cartoon Illustration */}
        <motion.div
          className="contact-visual"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={contactImage} alt="Contact Me" className="contact-img" />
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form
            className="contact-form"
            action="https://formsubmit.co/sharmamanchiraju02@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <span className="input-icon"><FaUser /></span>
              <input type="text" name="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <span className="input-icon"><FaEnvelope /></span>
              <input type="email" name="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <span className="input-icon textarea-icon"><FaCommentAlt /></span>
              <textarea name="message" placeholder="Enter your message" rows="5" required></textarea>
            </div>

            <input type="hidden" name="_subject" value="New Portfolio Contact Submission!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <button type="submit" className="submit-btn">
              Send <FaPaperPlane />
            </button>
          </form>
        </motion.div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="brand-name">Sharma Manchiraju</span>
            <span className="brand-tag">Follow me</span>
            <div className="footer-socials">
              {/* Icons are handled in Hero, duplicating here for footer as per Ref */}
            </div>
          </div>
          <div className="footer-links">
            <div className="link-column">
              <h4>Home</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="link-column">
              <h4>Project</h4>
              <a href="#projects">Project</a>
              <a href="#contact">Contact</a>
              <a href="#contact">Contact Me</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Designed with ❤️ by Sharma Manchiraju</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
