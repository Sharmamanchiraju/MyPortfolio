import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = '' }) => {
    return (
        <section id={id} className={`section-padding container ${className}`}>
            <div className="section-wrapper">
                {title && (
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    >
                        {title}
                    </motion.h2>
                )}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
