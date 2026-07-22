import { motion } from 'framer-motion';
import { fadeUpVariant, defaultViewport } from '../utils/motionVariants';

const SectionHeader = ({ eyebrowIcon, eyebrowText, title, subtext }) => {
  return (
    <motion.div
      className="section-header"
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <span className="section-eyebrow">
        {eyebrowIcon} {eyebrowText}
      </span>
      <h2 className="section-title">{title}</h2>
      <motion.div
        className="title-accent-bar"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ transformOrigin: 'center' }}
      />
      {subtext && <p className="section-subtext">{subtext}</p>}
    </motion.div>
  );
};

export default SectionHeader;
