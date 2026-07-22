import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FiFolder, FiBriefcase, FiCpu, FiMapPin, FiActivity } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import { cardScaleUpVariant, staggerContainerVariant, defaultViewport } from '../utils/motionVariants';
import './Metrics.css';

const statIcons = {
  FiFolder: <FiFolder aria-hidden="true" />,
  FiBriefcase: <FiBriefcase aria-hidden="true" />,
  FiCpu: <FiCpu aria-hidden="true" />,
  FiMapPin: <FiMapPin aria-hidden="true" />,
};

/* Count-Up Animation Component on Scroll-Into-View (~800ms duration) */
const CountUpValue = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numericMatch = value.match(/^(\d+)(.*)$/);
  const targetNum = numericMatch ? parseInt(numericMatch[1], 10) : null;
  const suffix = numericMatch ? numericMatch[2] : '';

  useEffect(() => {
    if (!isInView || targetNum === null) return;

    let start = 0;
    const duration = 800; // 800ms
    const stepTime = Math.max(20, Math.floor(duration / targetNum));

    const timer = setInterval(() => {
      start += 1;
      setDisplayValue(start);
      if (start >= targetNum) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetNum]);

  if (targetNum === null) {
    return <span ref={ref} className="metric-value gradient-text">{value}</span>;
  }

  return (
    <span ref={ref} className="metric-value gradient-text">
      {displayValue}{suffix}
    </span>
  );
};

const Metrics = () => {
  return (
    <section id="metrics" className="section-wrapper metrics-section" aria-label="Impact Statistics">
      <div className="container">
        <SectionHeader
          eyebrowIcon={<FiActivity aria-hidden="true" />}
          eyebrowText="IMPACT STATS"
          title="Key Career Metrics"
          subtext="Defensible metrics reflecting real enterprise development and technical reach."
        />

        <motion.div
          className="metrics-grid"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {resumeData.stats.map((stat) => (
            <motion.div key={stat.label} className="metric-card glass-card" variants={cardScaleUpVariant}>
              <div className="metric-icon">{statIcons[stat.icon] || <FiCpu aria-hidden="true" />}</div>
              <div className="metric-content">
                <CountUpValue value={stat.value} />
                <span className="metric-label">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;
