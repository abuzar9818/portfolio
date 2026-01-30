import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaDownload } from 'react-icons/fa';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark";
    }
    return "light";
  });

/* ✅ Load theme on page refresh */
useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  }
}, []);

/* ✅ Apply theme to body */
useEffect(() => {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}, [theme]);

/* ✅ Toggle theme */
const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
};



useEffect(() => {
  document.body.setAttribute("data-theme", theme);
}, [theme]);


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
          <div className="nav-logo">
            <span className="nav-code-symbol">&lt;./&gt;</span>
            Abuzar Ahmad
          </div>
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
            
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;