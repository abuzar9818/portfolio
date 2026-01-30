import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">Abuzar Ahmad</div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <button onClick={() => scrollToSection('home')} className="nav-link">
              Home
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
        </ul>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;