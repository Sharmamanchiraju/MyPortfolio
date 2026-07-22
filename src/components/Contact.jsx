import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiGlobe, FiCheckCircle, FiCheck } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // TODO: Wire EmailJS or Formspree form submission handler here
    // Example: emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }, 600);
  };

  return (
    <footer id="contact" className="section-wrapper contact-section" aria-label="Contact and Footer">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          eyebrowIcon={<FiSend aria-hidden="true" />}
          eyebrowText="LET'S CONNECT"
          title="Get In Touch"
          subtext="I am open to Java backend engineering roles, microservice projects, and technical collaborations."
        />

        <div className="contact-grid">
          {/* Left Info Card */}
          <motion.div
            className="contact-info-card glass-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="info-card-title">Contact Information</h3>
            <p className="info-card-sub">
              Reach out directly via email, phone, or connect on LinkedIn and GitHub.
            </p>

            <div className="info-items">
              <a href={`mailto:${resumeData.profile.email}`} className="info-item" aria-label="Email address">
                <div className="info-icon">
                  <FiMail aria-hidden="true" />
                </div>
                <div>
                  <span className="info-label">Email</span>
                  <span className="info-value">{resumeData.profile.email}</span>
                </div>
              </a>

              <a href={`tel:${resumeData.profile.phone}`} className="info-item" aria-label="Phone number">
                <div className="info-icon">
                  <FiPhone aria-hidden="true" />
                </div>
                <div>
                  <span className="info-label">Phone</span>
                  <span className="info-value">{resumeData.profile.phone}</span>
                </div>
              </a>

              <div className="info-item">
                <div className="info-icon">
                  <FiMapPin aria-hidden="true" />
                </div>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">{resumeData.profile.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            className="contact-form-card glass-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.08 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  className="form-success"
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <FiCheckCircle className="success-icon" aria-hidden="true" />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. I'll respond to your message shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" key="form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email address"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Hi Sharma, I would like to connect regarding a Java Backend Developer role..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {isSubmitting ? <FiCheck className="btn-check-morph" aria-hidden="true" /> : <FiSend aria-hidden="true" />}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} {resumeData.profile.name}. All rights reserved. Built with React &amp; Vanilla CSS.
          </p>

          <div className="footer-socials" aria-label="Footer Social Links">
            <a href={resumeData.profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" title="GitHub">
              <FiGithub aria-hidden="true" />
            </a>
            <a href={resumeData.profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" title="LinkedIn">
              <FiLinkedin aria-hidden="true" />
            </a>
            <a href={resumeData.profile.social.email} aria-label="Send Email" title="Email">
              <FiMail aria-hidden="true" />
            </a>
            <a href={resumeData.profile.social.portfolio} target="_blank" rel="noopener noreferrer" aria-label="Live Portfolio" title="Live Vercel Portfolio">
              <FiGlobe aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
