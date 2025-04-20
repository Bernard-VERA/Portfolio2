import { useState } from 'react';
import { FaGlobe, FaGithub } from "react-icons/fa";
import '../styles/Projects.css';

const projectsData = [
  {
    name: "Booki",
    tech: "HTML - CSS",
    image: "/images/booki.webp",
    links: {
      github: "https://github.com/votre-compte/booki",
      live: "https://votre-compte.github.io/booki"
    },
    description: {
      overview: "Site de réservation d'hébergements en ligne",
      challenge: "Intégrer une maquette responsive en HTML et CSS",
      details: [
        "Développement from scratch",
        "Responsive design",
        "Validation W3C"
      ],
      technicalStack: {
        frontend: ["HTML5", "CSS3", "Flexbox", "Grid"],
        tools: ["VS Code", "Git", "GitHub Pages"]
      }
    }
  },
  {
    name: "Portfolio Sophie Bluel",
    tech: "HTML - CSS - Javascript",
    image: "/images/bluel.webp",
    description: {
      overview: "Portfolio d'une architecte d'intérieur",
      challenge: "Créer un site dynamique avec JavaScript",
      details: [
        "Authentification utilisateur",
        "Gestion de galerie dynamique",
        "Modal d'upload de projets"
      ],
      technicalStack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: ["Node.js", "Express"],
      }
    }
  },
  {
    name: "Menu Maker",
    tech: "Gestion de projet - Méthodes Agiles",
    image: "/images/qwenta.webp",
    description: {
      overview: "Gestion d'un projet de création de menus pour restaurants",
      challenge: "Gérer un projet en méthode agile",
      details: [
        "Planning poker",
        "Sprints hebdomadaires",
        "Kanban board"
      ],
      technicalStack: {
        tools: ["Trello"]
      }
    }
  },
  {
    name: "Portfolio Nina Carducci",
    tech: "Débogage - Optimisation - SEO",
    image: "/images/carducci.webp",
    description: {
      overview: "Portfolio d'une photographe professionnelle",
      challenge: "Optimiser les performances et le SEO",
      details: [
        "Optimisation des images",
        "Amélioration du SEO",
        "Debug avec Chrome DevTools"
      ],
      technicalStack: {
        optimization: ["Lighthouse", "Wave"]
      }
    }
  },
  {
    name: "Kasa location immobilière",
    tech: "React - NodeJS - JSON",
    image: "/images/kasa.webp",
    description: {
      overview: "Plateforme de location immobilière",
      challenge: "Développer une application React complète",
      details: [
        "Composants réutilisables",
        "Routing avec React Router"
      ],
      technicalStack: {
        frontend: ["React", "React Router", "Sass"]
      }
    }
  },
  {
    name: "Mon vieux grimoire",
    tech: "React - NodeJS - MongoDB - API REST",
    image: "/images/grimoire.webp",
    description: {
      overview: "Site de notation de livres",
      challenge: "Créer une API REST complète",
      details: [
        "Authentication JWT",
        "CRUD opérations",
        "Upload de fichiers"
      ],
      technicalStack: {
        frontend: ["React"],
        backend: ["Node.js", "Express"],
        database: ["MongoDB"]
      }
    }
  },
  {
    name: "Le clerc d'huissier",
    tech: "CMS - Gestion de site - Forum",
    image: "/images/huissier.webp",
    description: {
      overview: "Forum professionnel pour clercs d'huissier",
      challenge: "Gérer une communauté en ligne",
      details: [
        "Modération de contenu",
        "Gestion des utilisateurs",
        "Support technique"
      ],
      technicalStack: {
        cms: ["Phortail"]
      }
    }
  },
  {
    name: "Clerc de commissaire de justice",
    tech: "React - JSON - SEO",
    image: "/images/clerc.webp",
    description: {
      overview: "Site d'information professionnelle",
      challenge: "Optimiser le référencement",
      details: [
        "Structure de données",
        "Meta tags dynamiques"
      ],
      technicalStack: {
        frontend: ["React"],
        seo: ["Schema.org", "Open Graph"]
      }
    }
  },
  {
    name: "Photographe amateur",
    tech: "HTML - CSS - Javascript",
    image: "/images/photographe.webp",
    description: {
      overview: "Portfolio photographique",
      challenge: "Créer une galerie interactive",
      details: [
        "Mise en page complexe",
        "Qualité des photos",
        "Lazy loading"
      ],
      technicalStack: {
        frontend: ["HTML", "CSS", "JavaScript"]
      }
    }
  },
  {
    name: "Agence web BV",
    tech: "HTML - CSS - Scroll-Driven Animations",
    image: "/images/agence.webp",
    description: {
      overview: "Site vitrine d'agence web",
      challenge: "Créer des animations au scroll",
      details: [
        "Animations CSS",
        "Performance optimisée"
      ],
      technicalStack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        animations: ["Scroll Driven animations"]
      }
    }
  },
  {
    name: "To do list",
    tech: "HTML - CSS - Javascript",
    image: "/images/todo.webp",
    description: {
      overview: "Application de gestion de tâches",
      challenge: "Créer une application",
      details: [
        "LocalStorage",
        "Sécurité XSS"
      ],
      technicalStack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        storage: ["LocalStorage"]
      }
    }
  },
  {
    name: "Jeu de morpion",
    tech: "HTML - CSS - Javascript - IA",
    image: "/images/morpion.webp",
    description: {
      overview: "Jeu de morpion avec IA",
      challenge: "Trouver la logique",
      details: [
        "Gérer les tours",
        "Lister les combinaisons gagnantes",
        "Afficher le gagnant"
      ],
      technicalStack: {
        frontend: ["HTML", "CSS", "JavaScript"]
      }
    }
  },
  {
    name: "Générateur de bulletin de salaire",
    tech: "HTML - CSS - Javascript - IA",
    image: "/images/salaire.webp",
    description: {
      overview: "Outil de génération de fiches de paie",
      challenge: "Automatiser les calculs complexes",
      details: [
        "Calculs automatiques",
        "Export PDF",
        "Validation des données",
        "Sécuriser les formulaires"
      ],
      technicalStack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        libraries: ["jsPDF", "Purify.js"]
      }
    }
  }
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
            className="modal-image"
          />
          
          <div className="modal-description">
            <h3>Aperçu</h3>
            <p>{project.description.overview}</p>
            
            <h3>Challenge</h3>
            <p>{project.description.challenge}</p>
            
            <h3>Points clés</h3>
            <ul>
              {project.description.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            
            <h3>Stack Technique</h3>
            <div className="technical-stack">
              {Object.entries(project.description.technicalStack).map(([category, items]) => (
                <div key={category} className="stack-category">
                  <h4>{category}</h4>
                  <ul>
                    {items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="project-links">
              {project.links?.github && (
                <a 
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {project.links?.live && (
                <a 
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live"
                >
                  <FaGlobe /> Site Live
                </a>
              )}
            </div>

          </div>
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
