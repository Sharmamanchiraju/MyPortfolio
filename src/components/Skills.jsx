
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaJava, FaDatabase, FaTools, FaLeaf, FaCode, FaJs, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiSpringsecurity, SiHibernate, SiMysql, SiPostman, SiGit, SiDocker } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'Java', icon: <FaJava />, color: '#f89820' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
        { name: 'Spring Security', icon: <SiSpringsecurity />, color: '#6db33f' },
        { name: 'Hibernate', icon: <SiHibernate />, color: '#59666c' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
        { name: 'React JS', icon: <FaReact />, color: '#61DAFB' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'HTML', icon: <FaCode />, color: '#E34F26' },
        { name: 'CSS', icon: <FaCode />, color: '#1572B6' },
    ];

    const tools = [
        { name: 'VS Code', icon: <FaCode />, color: '#007ACC' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
        { name: 'STS', icon: <FaTools />, color: '#6db33f' },
        { name: 'GitHub', icon: <SiGit />, color: '#181717' },
        { name: 'SQL Workbench', icon: <FaDatabase />, color: '#00758F' },
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
            <h2 className="section-title">Skills</h2>
            <p className="skills-subtitle">Technologies I work with</p>
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
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                    </motion.div>
                ))}
            </motion.div>

            <h3 className="section-title tools-title">Tools</h3>
            <motion.div
                className="skills-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {tools.map((tool, index) => (
                    <motion.div
                        key={index}
                        className="skill-pill"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="skill-icon" style={{ color: tool.color }}>{tool.icon}</span>
                        <span className="skill-name">{tool.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
