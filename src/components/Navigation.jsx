import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaDownload } from 'react-icons/fa';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Abuzar_Ahmad_Resume.pdf';
    link.download = 'Abuzar_Ahmad_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <div className="nav-logo">Abuzar Ahmad</div>
        </div>
        
        <div className="nav-controls">
          <ul className="nav-menu">
            <li>
              <button onClick={() => scrollToSection('home')} className="nav-link">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="nav-link">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')} className="nav-link">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="nav-link">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('education')} className="nav-link">
                Education
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('achievements')} className="nav-link">
                Achievements
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                Contact
              </button>
            </li>
          </ul>
          
          <div className="nav-actions">
            <button className="resume-download-btn" onClick={downloadResume}>
              <FaDownload /> Resume
            </button>
            
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;