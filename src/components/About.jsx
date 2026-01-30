import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaRocket, FaChartLine } from 'react-icons/fa';

const About = () => {
  const aboutData = {
    introduction: "With 3+ years of experience in full-stack development, I specialize in building scalable web applications using modern technologies. My journey began with curiosity and evolved into a passion for creating impactful digital solutions that solve real-world problems.",
    quickNotes: [
      "100+ Data Structures & Algorithms problems solved",
      "Full-stack expertise in MERN stack development",
      "Passionate about emerging technologies and innovation"
    ],
    qualities: [
      {
        icon: <FaCode />,
        title: "Full-Stack Expertise",
        description: "Proficient in MERN stack with experience in building end-to-end applications."
      },
      {
        icon: <FaLightbulb />,
        title: "Problem Solver",
        description: "Strong analytical skills with 100+ DSA problems solved on competitive platforms."
      },
      {
        icon: <FaRocket />,
        title: "Innovation Focused",
        description: "Passionate about emerging technologies and constantly learning new tools."
      },
      {
        icon: <FaChartLine />,
        title: "Performance Driven",
        description: "Focused on creating efficient, scalable solutions with optimal performance."
      }
    ]
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-intro-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-aos="fade-right"
          >
            <div className="intro-card">
              <p>{aboutData.introduction}</p>
            </div>
            
            <div className="quick-notes">
              <h3>Quick Highlights</h3>
              <ul>
                {aboutData.quickNotes.map((note, index) => (
                  <li key={index}>
                    <span className="bullet">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="qualities-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            data-aos="fade-up"
          >
            {aboutData.qualities.map((quality, index) => (
              <motion.div 
                key={index}
                className="quality-card"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="quality-icon">
                  {quality.icon}
                </div>
                <h3>{quality.title}</h3>
                <p>{quality.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;