import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaTools, FaBook } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />, 
      skills: skills.programmingLanguages,
      color: "#6366f1"
    },
    {
      title: "Web Technologies",
      icon: <FaLaptopCode />, 
      skills: skills.webTechnologies,
      color: "#8b5cf6"
    },
    {
      title: "Developer Tools",
      icon: <FaTools />, 
      skills: skills.developerTools,
      color: "#06b6d4"
    },
    {
      title: "Libraries & Frameworks",
      icon: <FaBook />, 
      skills: skills.libraries,
      color: "#10b981"
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2 
          className="section-title animate-on-scroll"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          Technical Skills
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category card animate-on-scroll"
              whileHover={{ y: -10 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 style={{ color: category.color }}>
                {category.icon}
                {category.title}
              </h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-tag"
                    style={{ 
                      '--skill-color': category.color,
                      '--skill-bg': `${category.color}20`
                    }}
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + skillIndex * 50}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;