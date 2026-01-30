import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        <motion.h2 
          className="section-title animate-on-scroll"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          Education
        </motion.h2>
        
        <div className="timeline">
          {education.map((edu, index) => (
            <motion.div 
              key={edu.id}
              className={`timeline-item animate-on-scroll ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-anchor-placement="center-bottom"
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <FaGraduationCap style={{ color: '#38BDF8', fontSize: '1.5rem' }} />
                  <h3>{edu.degree}</h3>
                </div>
                
                <div className="institution">{edu.institution}</div>
                
                <div className="duration">
                  <FaCalendarAlt style={{ marginRight: '0.5rem' }} />
                  {edu.duration}
                </div>
                
                <div className="grade">
                  {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;