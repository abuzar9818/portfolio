import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaAward } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
  const { achievements } = portfolioData;

  const achievementIcons = [
    <FaTrophy />,
    <FaMedal />,
    <FaCertificate />,
    <FaAward />
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          Achievements & Certifications
        </motion.h2>
        
        <div className="achievements-showcase">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={achievement.id}
              className="achievement-card"
              whileHover={{ y: -10, scale: 1.05 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="achievement-icon">
                {achievementIcons[index]}
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;