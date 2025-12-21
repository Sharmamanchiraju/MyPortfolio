import { motion } from 'framer-motion';
import { FaJava, FaDatabase, FaTools, FaLeaf, FaCode, FaJs, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiSpringsecurity, SiHibernate, SiMysql, SiPostman, SiGit, SiDocker } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'HTML', icon: <FaCode />, color: '#E34F26' },
        { name: 'CSS', icon: <FaCode />, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'React JS', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Java', icon: <FaJava />, color: '#f89820' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
        { name: 'Spring Security', icon: <SiSpringsecurity />, color: '#6db33f' },
        { name: 'Hibernate', icon: <SiHibernate />, color: '#59666c' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
        { name: 'Git', icon: <SiGit />, color: '#f05032' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
        { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section className="skills-section" id="skills">
            <h2 className="section-title">Technical Skills</h2>
            <motion.div
                className="skills-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="skill-pill"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                    >
                        <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
