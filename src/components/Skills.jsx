import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const languages = [
    { name: "JavaScript", logo: "JS", color: "#F7DF1E", textColor: "#000000" },
    { name: "Python", logo: "PY", color: "#3776AB", textColor: "#FFFFFF" },
    { name: "Java", logo: "JAVA", color: "#ED8B00", textColor: "#FFFFFF" },
    { name: "TypeScript", logo: "TS", color: "#3178C6", textColor: "#FFFFFF" },
    { name: "C++", logo: "C++", color: "#00599C", textColor: "#FFFFFF" },
    { name: "C", logo: "C", color: "#A8B9CC", textColor: "#000000" },
    { name: "Go", logo: "GO", color: "#00ADD8", textColor: "#FFFFFF" },
    { name: "Rust", logo: "RS", color: "#000000", textColor: "#FFFFFF" }
  ];

  const frontend = [
    { name: "React", logo: "⚛", color: "#61DAFB", textColor: "#000000" },
    { name: "Vue.js", logo: "V", color: "#4FC08D", textColor: "#FFFFFF" },
    { name: "Next.js", logo: "N", color: "#000000", textColor: "#FFFFFF" },
    { name: "Angular", logo: "NG", color: "#DD0031", textColor: "#FFFFFF" },
    { name: "HTML5", logo: "H", color: "#E34F26", textColor: "#FFFFFF" },
    { name: "CSS3", logo: "C", color: "#1572B6", textColor: "#FFFFFF" },
    { name: "Sass", logo: "S", color: "#CC6699", textColor: "#FFFFFF" },
    { name: "Tailwind", logo: "T", color: "#06B6D4", textColor: "#FFFFFF" }
  ];

  const backend = [
    { name: "Node.js", logo: "⬡", color: "#339933", textColor: "#FFFFFF" },
    { name: "Express", logo: "E", color: "#000000", textColor: "#FFFFFF" },
    { name: "Django", logo: "D", color: "#092E20", textColor: "#FFFFFF" },
    { name: "Spring", logo: "SP", color: "#6DB33F", textColor: "#FFFFFF" },
    { name: "MongoDB", logo: "MDB", color: "#47A248", textColor: "#FFFFFF" },
    { name: "PostgreSQL", logo: "PG", color: "#336791", textColor: "#FFFFFF" },
    { name: "MySQL", logo: "SQL", color: "#4479A1", textColor: "#FFFFFF" },
    { name: "Redis", logo: "R", color: "#DC382D", textColor: "#FFFFFF" }
  ];

  const tools = [
    { name: "Git", logo: "GIT", color: "#F05032", textColor: "#FFFFFF" },
    { name: "Docker", logo: "🐳", color: "#2496ED", textColor: "#FFFFFF" },
    { name: "AWS", logo: "AWS", color: "#FF9900", textColor: "#FFFFFF" },
    { name: "Firebase", logo: "F", color: "#FFCA28", textColor: "#000000" },
    { name: "GitHub", logo: "GH", color: "#181717", textColor: "#FFFFFF" },
    { name: "VS Code", logo: "VS", color: "#007ACC", textColor: "#FFFFFF" },
    { name: "Postman", logo: "P", color: "#FF6C37", textColor: "#FFFFFF" },
    { name: "Figma", logo: "F", color: "#F24E1E", textColor: "#FFFFFF" }
  ];

  const allSkills = [...languages, ...frontend, ...backend, ...tools];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          Tech Stack
        </motion.h2>
        
        <div className="skills-showcase">
          <div className="skill-logos">
            {allSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-logo"
                whileHover={{ scale: 1.1, y: -5 }}
                data-aos="fade-up"
                data-aos-delay={index * 30}
              >
                <div 
                  className="logo-badge" 
                  style={{ 
                    backgroundColor: skill.color, 
                    color: skill.textColor 
                  }}
                >
                  {skill.logo}
                </div>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;