import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personalInfo, summary } = portfolioData;

  return (
    <section id="home" className="hero section">
      <div className="container hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="animate-on-scroll"
          data-aos="fade-up"
        >
          Hi, I'm {personalInfo.name}
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="animate-on-scroll"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {personalInfo.tagline}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="animate-on-scroll"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {summary}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-contact animate-on-scroll"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="contact-item">
            <FaEnvelope />
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </div>
          
          <div className="contact-item">
            <FaPhone />
            <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
          </div>
          
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>{personalInfo.location}</span>
          </div>
          
          <div className="contact-item">
            <FaLinkedin />
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          
          <div className="contact-item">
            <FaGithub />
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-actions animate-on-scroll"
          style={{ marginTop: '2rem' }}
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <a 
            href="#projects" 
            className="btn"
            style={{ marginRight: '1rem' }}
          >
            View My Work
          </a>
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="btn btn-outline"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;