import { useState } from 'react';
import { FaGlobe, FaGithub } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import '../styles/Projects.css';

const projectsData = [
  {
    name: "Booki",
    tech: "HTML - CSS",
    text: "Site de location de logements de vacances",
    image: "/images/booki.webp",
    links: {
      github: "https://github.com/votre-compte/booki",
      live: "https://votre-compte.github.io/booki"
    },
    description: {
      infos: "Projet OpenClassrooms - Novembre 2023",
      overview: "Site de réservation en ligne d'hébergements de vacances",
      challenge: "Vous commencez une alternance chez Booki comme développeur web, chargé d'intégrer une interface responsive en HTML et CSS pour un site facilitant la recherche d'hébergements et d'activités, selon une maquette Figma.",
      details: [
        "Création d'une page d'accueil",
        "Développement from scratch",
        "Responsive design",
        "Validation W3C"
      ],
      technicalStack: {
        frontend: ["HTML5", "CSS3", "Flexbox", "Grid"],
        outils: ["VS Code", "Figma", "Git", "GitHub"]
      }
    }
  },
  {
    name: "Sophie Bluel",
    tech: "HTML - CSS - Javascript",
    text: "Portfolio d'une architecte d'intérieur",
    image: "/images/bluel.webp",
    links: {
      github: "https://github.com/votre-compte/booki"
    },
    description: {
      infos: "Projet OpenClassRooms - Décembre 2023",
      overview: "Portfolio d'une architecte d'intérieur",
      challenge: "Créer un site dynamique avec JavaScript : Vous êtes développeur front-end chez ArchiWebos (50 salariés) et recevez toutes les ressources nécessaires après une réunion de projet. Vos missions : intégrer la page des travaux de l'architecte, créer la page de connexion administrateur et développer une modale d’upload de médias.",
      details: [
        "Authentification utilisateur",
        "Gestion de galerie dynamique",
        "Modale d'upload de projets"
      ],
      technicalStack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: ["Node.js", "Postman"],
      }
    }
  },
  {
    name: "Menu Maker",
    tech: "Gestion de projet - Méthodes Agiles",
    text: "Site de création de menus de restaurant",
    image: "/images/qwenta.webp",
    links: {
      github: "https://github.com/votre-compte/booki",
      live: "https://votre-compte.github.io/booki"
    },
    description: {
      infos: "Projet OpenClassRooms - Janvier 2024",
      overview: "Gestion d'un projet de création de menus pour restaurants",
      challenge: "Gérer un projet en méthode agile : Vous êtes développeur front-end chez Webgencia et travaillez sur “Menu Maker” pour Qwenta, un site permettant aux restaurateurs de gérer leurs menus. Vous devez rédiger les spécifications techniques, finaliser un tableau Kanban et mener une veille technologique.",
      details: [
        "Planification de projet",
        "Planning poker",
        "Sprints hebdomadaires",
        "Kanban board",
        "Spécifications techniques",
        "Veille technologique"
      ],
      technicalStack: {
        tools: ["Trello", "Daily.dev", "Feedly", "Wakelet" ]
      }
    }
  },
  {
    name: "Nina Carducci",
    tech: "Débogage - Optimisation - SEO",
    text: "Portfolio d'une photographe",
    image: "/images/carducci.webp",
    links: {
      github: "https://github.com/votre-compte/booki",
      live: "https://votre-compte.github.io/booki"
    },
    description: {
      infos: "Projet OpenClassrooms - Janvier 2024",
      overview: "Portfolio d'une photographe professionnelle",
      challenge: "Optimiser les performances et le SEO : Vous êtes développeur freelance et vous décidez de proposer vos services d’optimisation SEO à de nouveaux clients. Parmi vos prospects, il y a le site de Nina Carducci, une photographe.",
      details: [
        "Rédaction d'un cahier de recette",
        "Optimisation des images",
        "Amélioration du SEO",
        "Accessibilité du site",
        "Correction de bugs avec Chrome DevTools"
      ],
      technicalStack: {
        optimisation: ["Lighthouse", "Wave", "Lazy Loading" ],
        Référencement: ["Schema.org", "Google Rich Snippets", "Balises Meta" ]
      }
    }
  },
  {
    name: "Kasa",
    tech: "React - NodeJS - JSON",
    text: "Site de location de logements",
    image: "/images/kasa.webp",
    links: {
      github: "https://github.com/votre-compte/booki",
      live: "https://votre-compte.github.io/booki"
    },
    description: {
      infos: "Projet OpenClassrooms - Février 2024",
      overview: "Plateforme de location immobilière",
      challenge: "Développer une application React complète : Vous êtes développeur front-end freelance pour Kasa, une entreprise leader en location entre particuliers, en pleine refonte technique vers JavaScript. Votre mission : développer l’application en React selon les maquettes Figma. En l’absence temporaire d’un développeur back-end, vous utiliserez un fichier JSON pour les données.",
      details: [
        "Composants réutilisables",
        "Création des routes",
        "Gestion des erreurs",
        "Création d'un Carrousel d'images",
        "Animations CSS"
      ],
      technicalStack: {
        frontend: ["React", "React Router", "Sass"]
      }
    }
  },
  {
    name: "Mon vieux grimoire",
    tech: "React - NodeJS - MongoDB - API REST",
    text: "Site de notation de livres",
    image: "/images/grimoire.webp",
    links: {
      github: "https://github.com/votre-compte/booki",
      live: "https://votre-compte.github.io/booki"
    },
    description: {
      infos: "Projet OpenClassrooms - Mars 2024",
      overview: "Site de notation de livres",
      challenge: "Créer le back-end d'un site : Vous êtes développeur back-end freelance à Lille et collaborez avec un front-end sur Mon Vieux Grimoire, un site de notation de livres. Votre mission : créer le back-end selon les spécifications de l’API, en veillant à l’optimisation des images pour respecter les bonnes pratiques du Green Code.",
      details: [
        "Création de la logique métier",
        "Architecture MVC",
        "Utilisation de Middlewares",
        "Création d'une base de données",
        "Protection de données",
        "Authentication JWT",
        "Opérations CRUD",
        "Upload de fichiers",
        "Optimisation des images"
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
    text: "Site sur les clercs d'huissier",
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
    name: "Commissaire de justice",
    tech: "React - JSON - SEO",
    text: "Site sur les clercs de commissaire de justice",
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
    text: "Site d'un photographe amateur",
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
    text: "Site d'une agence web",
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
    text: "Une Todo List simple",
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
    text: "Un jeu de morpion simple",
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
    name: "Bulletin de salaire",
    tech: "HTML - CSS - Javascript - IA",
    text: "Générateur de bulletin de salaire",
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
          <button className="modal-close" onClick={onClose}><FaX /></button>
          
          <h2>{project.name}</h2>
          <img 
            src={project.image} 
            alt={project.name} 
            className="modal-image"
          />
          
          <div className="modal-description">
            <h3>Infos</h3>
            <p>{project.description.infos}</p>

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
                <a href={project.links.github}target="_blank"rel="noopener noreferrer"className="project-link github"><FaGithub />GitHub </a>
              )}
              {project.links?.live && (
                <a href={project.links.live}target="_blank"rel="noopener noreferrer"className="project-link live"><FaGlobe />Site</a>
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
            <img src={project.image} alt={project.name} className="project-image"/>
            <div className="project-content">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-text">{project.text}</p>
              <p className="project-tech">{project.tech}</p>
              <button className="project-button"onClick={() => setSelectedProject(project)}>En savoir plus ...</button>
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
