import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personalInfo } = portfolioData;

  const handleGetInTouch = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  // Shortened summary for hero section
  const summary = "Full Stack Developer with 3+ years of experience building scalable web applications and solving complex problems through code.";

  return (
    <section id="home" className="hero section">
      <div className="container hero-content">
        <div className="hero-grid">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            data-aos="fade-right"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Hi, I'm {personalInfo.name}
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {personalInfo.tagline}
            </motion.h2>
            
            <motion.p 
              className="hero-summary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {summary}
            </motion.p>
            
            <motion.div 
              className="hero-contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="contact-icons">
                <a href={`mailto:${personalInfo.email}`} className="contact-icon">
                  <FaEnvelope />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-icon">
                  <FaLinkedin />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-icon">
                  <FaGithub />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <a 
                href="#projects" 
                className="btn"
              >
                View My Work
              </a>
              <button 
                onClick={handleGetInTouch}
                className="btn btn-outline get-in-touch-btn"
              >
                <FaPaperPlane /> Get In Touch
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-aos="fade-left"
          >
            <div className="profile-image-container">
              <div className="profile-placeholder">
                <div className="profile-initials">AA</div>
                <p>Abuzar Ahmad</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;