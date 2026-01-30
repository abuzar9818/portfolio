import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 
          className="section-title animate-on-scroll"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          My Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card animate-on-scroll"
              whileHover={{ y: -10 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-tech">{project.technologies}</div>
              </div>
              
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                
                <ul className="project-features">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} data-aos="fade-up" data-aos-delay="100">{feature}</li>
                  ))}
                </ul>
                
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> View Code
                  </a>
                  <a 
                    href="#" 
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;