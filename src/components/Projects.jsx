import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaLayerGroup } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

// Import project images from assets
import urbanEliteImg from '../assets/urban.png';
import megaBlogImg from '../assets/megaBlog.png';
import weatherAppImg from '../assets/weatherApp.png';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Map project images to their respective IDs
  const projectImages = {
    1: urbanEliteImg, // Urban Elite
    2: megaBlogImg,   // Mega Blog
    3: weatherAppImg  // Weather App
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          Featured Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              whileHover={{ y: -15, scale: 1.02 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openModal(project)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-image-placeholder">
                {projectImages[project.id] ? (
                  <img 
                    src={projectImages[project.id]} 
                    alt={project.title}
                    className="project-image"
                  />
                ) : (
                  <div className="image-placeholder-text">
                    Project Image
                  </div>
                )}
              </div>
              
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-tech">{project.technologies}</div>
              </div>
              
              <div className="project-content">
                <p className="project-description">{project.description.substring(0, 120)}...</p>
                <div className="project-stats">
                  <div className="stat">
                    <FaLayerGroup /> {project.features.length} Features
                  </div>
                </div>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="project-link"
                  >
                    <FaGithub /> Code
                  </a>
                  <span className="project-link view-details">
                    <FaExternalLinkAlt /> Details
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && selectedProject && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-project-icon">
                  <FaCode size={30} />
                </div>
                <h2>{selectedProject.title}</h2>
                <button className="modal-close" onClick={closeModal}>
                  <FaTimes />
                </button>
              </div>
              
              <div className="modal-body">
                <div className="modal-project-image">
                  {projectImages[selectedProject.id] ? (
                    <img 
                      src={projectImages[selectedProject.id]} 
                      alt={selectedProject.title}
                      className="modal-image"
                    />
                  ) : (
                    <div className="modal-image-placeholder-text">
                      Project Image
                    </div>
                  )}
                </div>
                
                <div className="modal-project-details">
                  <div className="tech-stack">
                    <strong>Technologies:</strong> {selectedProject.technologies}
                  </div>
                  
                  <div className="project-full-description">
                    <p>{selectedProject.description}</p>
                  </div>
                  
                  <div className="project-features-modal">
                    <h3>Key Features:</h3>
                    <ul>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="modal-project-links">
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      <FaGithub /> View Source Code
                    </a>
                    <a 
                      href="#" 
                      className="btn btn-outline"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;