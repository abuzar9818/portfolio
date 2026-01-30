import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personalInfo } = portfolioData;
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Abuzar Ahmad</h3>
            <p>Full Stack Developer</p>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p><FaEnvelope /> {personalInfo.email}</p>
            <p><FaPhone /> {personalInfo.phone}</p>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Abuzar Ahmad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;