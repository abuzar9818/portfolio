import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
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
            <div className="footer-social">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p><FaEnvelope /> {personalInfo.email}</p>
            <p><FaMapMarkerAlt /> {personalInfo.location}</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
            </ul>
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