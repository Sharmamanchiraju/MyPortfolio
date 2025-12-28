
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content-centered">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Open for opportunities and collaborations.
        </p>

        <div className="contact-grid-wrapper">
          {/* Contact Info Card */}
          <div className="contact-info-card standard-card">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-subtitle">
              Feel free to reach out to me anytime.
            </p>

            <div className="info-item">
              <span className="info-label">Email</span>
              <a href="mailto:sharmamanchiraju02@gmail.com" className="info-value">Sharmamanchiraju02@gmail.com</a>
            </div>
            <div className="info-item">
              <span className="info-label">Phone</span>
              <span className="info-value">9573864944</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">Hyderabad, Telangana</span>
            </div>

            <div className="contact-socials-card">
              <a href="https://github.com/Sharmamanchiraju" target="_blank" rel="noreferrer" className="social-icon-card"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/sharma-manchiraju-3109b8227/" target="_blank" rel="noreferrer" className="social-icon-card"><FaLinkedin /></a>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-form-card standard-card">
            <form
              className="contact-form"
              action="https://formsubmit.co/sharmamanchiraju02@gmail.com"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" id="name" required className="form-input" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" required className="form-input" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea name="message" id="message" rows="4" required className="form-textarea" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <footer className="minimal-footer">
          <p className="copyright">Designed & Built by Sharma Manchiraju</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
