import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FiBookOpen, FiCalendar } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import './Education.css';

const Education = () => {
  return (
    <section className="section-wrapper education-section" aria-label="Academic Education">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          eyebrowIcon={<FiBookOpen aria-hidden="true" />}
          eyebrowText="EDUCATION"
          title="Academic Background"
          subtext="Formal computer science degree and foundational engineering background."
        />

        <div className="education-single-wrapper">
          {resumeData.education.map((edu) => (
            <motion.div
              key={edu.degree}
              className="edu-card glass-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <div className="edu-card-top">
                <h3 className="edu-degree">{edu.degree}</h3>
                <span className="edu-grade-pill">{edu.grade}</span>
              </div>
              <h4 className="edu-institution">{edu.institution}</h4>
              <div className="edu-dates">
                <FiCalendar aria-hidden="true" /> {edu.dates}
              </div>
              <p className="edu-details">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
