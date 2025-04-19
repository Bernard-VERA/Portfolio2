import React from 'react';
import { useState } from 'react';
import '../styles/Projects.css';

const projectsData = [
  { name: "Booki", tech: "HTML - CSS", image: "/images/booki.webp" },
  { name: "Portfolio Sophie Bluel", tech: "HTML - CSS - Javascript", image: "/images/bluel.webp" },
  { name: "Menu Maker", tech: "Gestion de projet - Méthodes Agiles", image: "/images/qwenta.webp" },
  { name: "Portfolio Nina Carducci", tech: "Débogage - Optimisation - SEO", image: "/images/carducci.webp" },
  { name: "Kasa location immobilière", tech: "React - NodeJS - JSON", image: "/images/kasa.webp" },
  { name: "Mon vieux grimoire", tech: "React - NodeJS - MongoDB - API REST", image: "/images/grimoire.webp" },
  { name: "Le clerc d'huissier", tech: "CMS - Gestion de site - Forum", image: "/images/huissier.webp" },
  { name: "Clerc de commissaire de justice", tech: "React - JSON - SEO", image: "/images/clerc.webp" },
  { name: "Photographe amateur", tech: "HTML - CSS - Javascript", image: "/images/photographe.webp" },
  { name: "Agence web BV", tech: "HTML - CSS - Scroll-Driven Animations", image: "/images/agence.webp" },
  { name: "To do list", tech: "HTML - CSS - Javascript", image: "/images/todo.webp" },
  { name: "Jeu de morpion", tech: "HTML - CSS - Javascript - IA", image: "/images/morpion.webp" },
  { name: "Générateur de bulletin de salaire", tech: "HTML - CSS - Javascript - IA", image: "/images/bulletin.webp" },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>×</button>
          <h2>{project.name}</h2>
          <img 
            src={project.image} 
            alt={project.name} 
            style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem' }}
          />
          <p className="project-tech">{project.tech}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="projects">
      <h1>Mes Projets</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img 
              src={project.image} 
              alt={project.name} 
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-tech">{project.tech}</p>
              <button 
                className="project-button"
                onClick={() => setSelectedProject(project)}
              >
                En savoir plus...
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}

export default Projects;
