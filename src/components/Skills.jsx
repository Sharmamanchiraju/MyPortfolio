import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resume';
import {
  SiOpenjdk,
  SiPython,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiSpringsecurity,
  SiJsonwebtokens,
  SiLiquibase,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiApachemaven,
  SiPostman,
  SiIntellijidea,
  SiEclipseide,
  SiLinux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiOpenai,
  SiGithubcopilot,
} from 'react-icons/si';
import { TbApi, TbComponents, TbBrandVscode } from 'react-icons/tb';
import { FiDatabase, FiRefreshCw, FiCpu, FiTerminal, FiLayers } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import './Skills.css';

const iconMap = {
  SiOpenjdk: <SiOpenjdk aria-hidden="true" />,
  SiPython: <SiPython aria-hidden="true" />,
  SiSpringboot: <SiSpringboot aria-hidden="true" />,
  SiSpring: <SiSpring aria-hidden="true" />,
  SiHibernate: <SiHibernate aria-hidden="true" />,
  TbApi: <TbApi aria-hidden="true" />,
  TbComponents: <TbComponents aria-hidden="true" />,
  SiSpringsecurity: <SiSpringsecurity aria-hidden="true" />,
  SiJsonwebtokens: <SiJsonwebtokens aria-hidden="true" />,
  SiLiquibase: <SiLiquibase aria-hidden="true" />,
  SiFastapi: <SiFastapi aria-hidden="true" />,
  SiPostgresql: <SiPostgresql aria-hidden="true" />,
  SiMysql: <SiMysql aria-hidden="true" />,
  FiDatabase: <FiDatabase aria-hidden="true" />,
  SiAmazonwebservices: <SiAmazonwebservices aria-hidden="true" />,
  SiDocker: <SiDocker aria-hidden="true" />,
  SiGit: <SiGit aria-hidden="true" />,
  FiRefreshCw: <FiRefreshCw aria-hidden="true" />,
  SiApachemaven: <SiApachemaven aria-hidden="true" />,
  SiPostman: <SiPostman aria-hidden="true" />,
  SiIntellijidea: <SiIntellijidea aria-hidden="true" />,
  SiEclipseide: <SiEclipseide aria-hidden="true" />,
  TbBrandVscode: <TbBrandVscode aria-hidden="true" />,
  SiLinux: <SiLinux aria-hidden="true" />,
  SiHtml5: <SiHtml5 aria-hidden="true" />,
  SiCss3: <SiCss3 aria-hidden="true" />,
  SiJavascript: <SiJavascript aria-hidden="true" />,
  SiReact: <SiReact aria-hidden="true" />,
  FiCpu: <FiCpu aria-hidden="true" />,
  SiOpenai: <SiOpenai aria-hidden="true" />,
  SiGithubcopilot: <SiGithubcopilot aria-hidden="true" />,
  FiTerminal: <FiTerminal aria-hidden="true" />,
};

const Skills = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const currentCategory = resumeData.skillsCategorized[activeCategoryIndex];

  return (
    <section id="skills" className="section-wrapper skills-section" aria-label="Technical Skills">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          eyebrowIcon={<FiLayers aria-hidden="true" />}
          eyebrowText="SKILLS"
          title="Technical Competencies"
          subtext="Categorized technical skills from my active enterprise development stack."
        />

        {/* Category Filter Tabs with Sliding Pill Animation */}
        <div className="skills-tabs" role="tablist" aria-label="Skill Categories">
          {resumeData.skillsCategorized.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.category}
                role="tab"
                aria-selected={isActive}
                className={`skills-tab ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategoryIndex(idx)}
              >
                <span className="tab-label-text">{cat.category}</span>
                {isActive && (
                  <motion.span
                    className="active-tab-pill-bg"
                    layoutId="activeSkillTabPill"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Container with Auto Height & Smooth Tab Transitions */}
        <div className="skills-content-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.category}
              className="skills-grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              role="tabpanel"
              aria-label={`${currentCategory.category} Skills`}
            >
              {currentCategory.skills.map((skill) => (
                <div key={skill.name} className="skill-card glass-card">
                  <div className="skill-icon-wrapper">
                    {iconMap[skill.icon] || <FiCpu aria-hidden="true" />}
                  </div>
                  <div className="skill-details">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-cat-label">{currentCategory.category}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
