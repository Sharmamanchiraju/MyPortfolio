import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './FloatingSection.css';

const FloatingSection = ({ children, id, className = '', ariaLabel }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  /* Smooth 3D Floating Window Transforms (Entry -> Center -> Exit) */
  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.93, 0.98, 1, 0.98, 0.93]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.8, 1],
    [0.2, 0.9, 1, 0.9, 0.2]
  );

  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [8, 0, 0, 0, 8]
  );

  const filter = useTransform(blurValue, (v) => `blur(${v}px)`);

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [3, 1, 0, -1, -3]
  );

  return (
    <div ref={sectionRef} id={id} className={`floating-section-container ${className}`} aria-label={ariaLabel}>
      <motion.div
        className="floating-window-card"
        style={{
          scale,
          opacity,
          filter,
          rotateX,
          transformPerspective: 1200,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FloatingSection;
