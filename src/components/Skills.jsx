import React from "react";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";


import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiGithub,
  SiVite,
  SiVercel,
  SiPostman,
  SiRedis,
  SiFastapi,
} from "react-icons/si";

const Skills = () => {
  const skillSections = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "C", icon: <SiC /> },
        { name: "C++", icon: <SiCplusplus /> },
      ],
    },
    {
      title: "Technologies / Frameworks",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
         { name: "Postman", icon: <SiPostman /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "REST API", icon: <SiFastapi /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
          { name: "GitHub", icon: <SiGithub /> },
  { name: "Vite", icon: <SiVite /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        {skillSections.map((section, i) => (
          <motion.div 
            key={i} 
            className="skills-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <motion.h3 
              className="skills-heading"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 + 0.1 }}
            >
              {section.title}
            </motion.h3>

            <motion.div 
              className="skills-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 + 0.2 }}
            >
              {section.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  whileHover={{ 
                    scale: 1.08,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(56, 189, 248, 0.4)"
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: (i * 0.2) + (index * 0.1) + 0.3,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <p className="skill-name">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;