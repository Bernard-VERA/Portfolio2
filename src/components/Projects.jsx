/* eslint-disable */

// Composant de la section Projets
// Affiche une grille de projets avec filtres et modale détaillée
import { useState, useEffect, useRef } from 'react';
import { FaGlobe, FaGithub } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import '../styles/Projects.css';

// Données des projets
const projectsData = [
  {  
    id: 1,
    name: "Booki",
    tech: "HTML - CSS",
    text: "Site de location de logements de vacances",
    image: "/images/booki.webp",
    category: "scolaire",
    date: "2023-11-15",
    links: {
      github: "https://github.com/Bernard-VERA/Projet-2",
      live: "https://bernard-vera.github.io/Projet-2/"
    },
    description: {
      infos: "Projet de la formation OpenClassRooms",
      date: "Novembre 2023",
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
    id: 2,
    name: "Sophie Bluel",
    tech: "HTML - CSS - Javascript",
    text: "Portfolio d'une architecte d'intérieur",
    image: "/images/bluel.webp",
    category: "scolaire",
    date: "2023-12-15",
    links: {
      github: "https://github.com/Bernard-VERA/Projet-3"
    },
    description: {
      infos: "Projet de la formation OpenClassRooms",
      date: "Décembre 2023",
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
    id: 3,
    name: "Menu Maker",
    tech: "Gestion de projet - Méthodes Agiles",
    text: "Site de création de menus de restaurant",
    image: "/images/qwenta.webp",
    category: "scolaire",
    date: "2024-01-15",
    links: {
      github: "https://github.com/Bernard-VERA/Projet-4",
      live: "https://bernard-vera.github.io/Projet-4/"
    },
    description: {
      infos: "Projet de la formation OpenClassRooms",
      date: "Janvier 2024",
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
        Méthodes: ["Méthodes Agiles", "Scrum", "Kanban", "Personas"],
        Outils: ["Trello", "Daily.dev", "Feedly", "Wakelet" ]
      }
    }
  },
  {
    id: 4,
    name: "Nina Carducci",
    tech: "Débogage - Optimisation - SEO",
    text: "Portfolio d'une photographe",
    image: "/images/carducci.webp",
    category: "scolaire",
    date: "2024-01-30",
    links: {
      github: "https://github.com/Bernard-VERA/Projet-5",
      live: "https://bernard-vera.github.io/Projet-5/"
    },
    description: {
      infos: "Projet de la formation OpenClassrooms",
      date: "Janvier 2024",
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
    id: 5,
    name: "Kasa",
    tech: "React - NodeJS - JSON",
    text: "Site de location de logements",
    image: "/images/kasa.webp",
    category: "scolaire",
    date: "2024-02-15",
    links: {
      github: "https://github.com/Bernard-VERA/Projet-6",
      live: "https://kasa-bernard-vera.vercel.app/"
    },
    description: {
      infos: "Projet de la formation OpenClassrooms",
      date: "Février 2024",
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
        frontend: ["React", "React Router", "Sass"],
        outils: ["Figma", "GitHub", "Vercel"]
      }
    }
  },
  {
    id:6,
    name: "Mon vieux grimoire",
    tech: "React - NodeJS - MongoDB - API REST",
    text: "Site de notation de livres",
    image: "/images/grimoire.webp",
    category: "scolaire",
    date: "2024-03-15",
    links: {
      github: "https://github.com/Bernard-VERA/Projet-7"
    },
    description: {
      infos: "Projet OpenClassrooms",
      date: "Mars 2024",
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
        backend: ["Node.js", "Express", "Postman"],
        database: ["MongoDB"]
      }
    }
  },
  {
    id: 7,
    name: "Le clerc d'huissier",
    tech: "CMS - Gestion de site - Forum",
    text: "Site sur les clercs d'huissier",
    image: "/images/huissier.webp",
    category: "personnel",
    date: "2009-05-15",
    links: {
      live: "http://clercdhuissier.free.fr/"
    },
    description: {
      infos: "Projet Personnel",
      date: "Mai  2009",
      overview: "Forum professionnel pour clercs d'huissier",
      challenge: "Durant ma carrière de clerc d'huissier, ma passion pour l'informatique m'a poussé à combler un vide en créant ce site sur ma profession. Sans formation à l'époque, j'ai utilisé un CMS simple (Phortail), que j'ai  progressivement amélioré. J’ai ensuite commencé à gérer des blogs et à concevoir de petits sites familiaux et amicaux, à une époque où les réseaux sociaux n’existaient pas encore. Ce site a rencontré un certain succès, figurant parmi les cinq premiers résultats de recherche pour le terme 'Huissiers'. Je l'ai maintenu en ligne, mais il est démodé, dépassé techniquement, et obsolète.",
      details: [
        "Création d'un site web",
        "Création de contenu",
        "Gestion des utilisateurs",
        "Gestion d'un forum",
        "Modération de contenu",
        "Support technique",
        "Transfert FTP",
        "Apache"
      ],
      technicalStack: {
        cms: ["Phortail", "Hébergeur Free", "FileZilla"],
        outils: ["Recherche Google", "Reddit", "Stack Overflow", "Le site du zéro"]
      }
    }
  },
  {
    id: 8,
    name: "Commissaire de justice",
    tech: "React - JSON - SEO",
    text: "Site sur les clercs de commissaire de justice",
    image: "/images/clerc.webp",
    category: "personnel",
    date: "2024-07-15",
    links: {
      github: "https://github.com/Bernard-VERA/Projet-clerc",
      live: "https://projet-clerc.vercel.app/"
    },
    description: {
      infos: "Projet Personnel",
      date: "Juillet 2024",
      overview: "Site d'information à l'attention des clercs d'Huissiers",
      challenge: "Refonte complète du site LE CLERC D'HUISSIER. L'ancien site, devenu obsolète et non sécurisé, ne pouvait plus être mis à jour. Une réforme de 2020 ayant profondément transformé la profession, j'ai décidé de repartir de zéro et de créer un nouveau site en React. C'est une 'Single Page Application', sans base de données, mais avec des fichiers JSON pour stocker les contenus. Le site est adapté à tous les formats (desktop, tablette, mobile), et a été optimisé en termes de référencement, accessibilité et performances. Hébergé sur Vercel, ce projet m'a permis d'améliorer mes compétences techniques.",
      details: [
        "Création From Scratch avec React",
        "Single Page Application",
        "Composants réutilisables",
        "Gestion des routes",
        "Gestion des erreurs",
        "Accessibilité",
        "référencement"
      ],
      technicalStack: {
        frontend: ["React", "React Router", "JSON"],
        outils: ["LightHouse", "Wave", "GitHub", "Vercel", "Forumactif.com"]
      }
    }
  },
  {
    id: 9,
    name: "Photographe amateur",
    tech: "HTML - CSS - Javascript",
    text: "Site d'un photographe amateur",
    image: "/images/photographe.webp",
    category: "personnel",
    date: "2024-09-15",
    links: {
      github: "https://github.com/Bernard-VERA/Photographe",
      live: "https://bernard-vera.github.io/Photographe/index.html"
    },
    description: {
      infos: "Projet Personnel",
      date: "Septembre 2024",
      overview: "Le site web d'un photographe amateur",
      challenge: "Création du site web d'un photographe amateur imaginaire. Portfolio créé en HTML/CSS pour réviser les bases, conforme aux normes et optimisé pour le web. Expérimentation du Responsive Design et d'un fond d'écran animé.",
      details: [
        "Mise en page complexe",
        "Utilisation de Grid",
        "Qualité des photos",
        "Lazy loading",
        "Optimisation"
      ],
      technicalStack: {
        frontend: ["HTML", "CSS", "JavaScript"]
      }
    }
  },
  {
    id: 10,
    name: "Agence web BV",
    tech: "HTML - CSS - Scroll-Driven Animations",
    text: "Site d'une agence web",
    image: "/images/agence.webp",
    category: "personnel",
    date: "2024-10-15",
    links: {
      github: "https://github.com/Bernard-VERA/Agence-Web",
      live: "https://bernard-vera.github.io/Agence-Web/"
    },
    description: {
      infos: "Projet Personnel",
      date: "Octobre 2024",
      overview: "Site vitrine d'une agence web",
      challenge: "Créer des animations au scroll en CSS Only : Lors de ma veille technologique, j'ai découvert une nouvelle fonctionnalité (Scroll-Driven Animations) permettant d'effectuer des animations au scroll directement en CSS. Pour explorer cette innovation, j'ai crée ce site expérimental, bien que cette technologie ne soit pas encore prise en charge par Firefox et Safari. Les tests révèlent des limites : le fichier CSS n'est pas validé par W3C et les animations ralentissent le chargement selon Lighthouse. Face à ces défis, en bon autodidacte, je me suis documenté pour tester et adapter ces nouvelles méthodes.",
      details: [
        "Animations CSS Only",
        "Performance optimisée"
      ],
      technicalStack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        animations: ["Scroll Driven Animations"]
      }
    }
  },
  {
    id: 11,
    name: "To-do list",
    tech: "HTML - CSS - Javascript",
    text: "Une To-do List simple",
    image: "/images/todo.webp",
    category: "personnel",
    date: "2024-11-15",
    links: {
      github: "https://github.com/Bernard-VERA/Simple-To-Do-List",
      live: "https://bernard-vera.github.io/Simple-To-Do-List/"
    },
    description: {
      infos: "Projet Personnel",
      date: "Novembre 2024",
      overview: "Application de gestion de tâches",
      challenge: "Création d'une To-Do List simple en HTML, JavaScript et CSS, un projet incontournable pour un développeur web. Le site permet d'ajouter et supprimer des tâches via un champ de saisie et un bouton, avec stockage des données en localStorage. Ce projet permet de réviser les bases du JavaScript, comme la manipulation du DOM (document.createElement, appendChild, removeChild), l'ajout d'écouteurs d'événements (addEventListener), et la gestion des données sous forme de tableaux et objets.",
      details: [
        "Création d'éléments dynamiquement",
        "Ajouter des écouteurs d'événements",
        "Modification du DOM",
        "LocalStorage",
        "Sécurité XSS"
      ],
      technicalStack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        outils: ["LocalStorage", "Sécurité XSS"]
      }
    }
  },
  {
    id: 12,
    name: "Jeu de morpion",
    tech: "HTML - CSS - Javascript - IA",
    text: "Un jeu de morpion simple",
    image: "/images/morpion.webp",
    category: "personnel",
    date: "2024-12-15",
    links: {
      github: "https://github.com/Bernard-VERA/Tic-tac-toe",
      live: "https://bernard-vera.github.io/Tic-tac-toe/"
    },
    description: {
      infos: "Projet Personnel",
      date: "Décembre 2024",
      overview: "Jeu de morpion",
      challenge: "Développement d’un jeu de Morpion en HTML, CSS et JavaScript, avec l’aide de l’intelligence artificielle (Copilot) pour optimiser le code et gagner du temps. Ce projet, complexe par sa logique, a permis d’approfondir plusieurs compétences : gestion des combinaisons gagnantes, des tours et des égalités, interaction utilisateur via les événements JavaScript, et optimisation de l’interface. Tests et vérifications ont été réalisés pour garantir la compatibilité avec différents navigateurs et formats d’écran.",
      details: [
        "Gérer les tours",
        "Lister les combinaisons gagnantes",
        "Afficher le gagnant",
        "Afficher les égalités"
      ],
      technicalStack: {
        frontend: ["HTML", "CSS", "JavaScript", "Copilot"]
      }
    }
  },
  {
    id: 13,
    name: "Bulletin de salaire",
    tech: "HTML - CSS - Javascript - IA",
    text: "Générateur de bulletin de salaire",
    image: "/images/salaire.webp",
    category: "personnel",
    date: "2025-03-15",
    links: {
      github: "https://github.com/Bernard-VERA/Projet-Salaire",
      live: "https://bernard-vera.github.io/Projet-Salaire/"
    },
    description: {
      infos: "Projet Personnel",
      date: "Mars 2025",
      overview: "Outil de génération de fiches de paie",
      challenge: "Développer un outil de génération de bulletins de salaire en HTML, CSS et JavaScript, avec une interface intuitive inspirée de PAJEMPLOI. Le formulaire permet de saisir les informations nécessaires et génère automatiquement les montants et cotisations. Projet technique et complexe, il inclut des calculs avancés, une mise en page responsive, et une exportation en PDF via html2canvas et jsPDF. La sécurité est renforcée par des protections XSS et un jeton CSRF. Tests d’optimisation réalisés avec Lighthouse, Wave et validation W3C pour garantir performance et compatibilité.",
      details: [
        "Création de formulaires",
        "Validation des données",
        "Sécurisation des formulaires",
        "Calculs automatiques",
        "Export PDF"
      ],
      technicalStack: {
        frontend: ["HTML", "CSS", "JavaScript", "Copilot"],
        outils: ["Jeton CSRF unique","Local storage", "jsPDF", "Purify.js"]
      }
    }
  },
  {
    id: 14,
    name: "Projet en cours...",
    tech: "React - Vite - Javascript - IA",
    text: "Prévisions Météo",
    image: "/images/meteo.webp",
    category: "personnel",
    date: "2025-05-15",
    links: {
      github: "https://github.com/Bernard-VERA/Previmeteo3",
      live: "https://previmeteo.vercel.app/"
    },
    description: {
      infos: "Projet Personnel",
      date: "Mai 2025",
      overview: "Site de prévision météo, par ville",
      challenge: "Créer une application météo moderne permettant aux utilisateurs de consulter des prévisions météorologiques précises, sur 3 jours. Développée avec React et Vite, elle exploite les API Open-Meteo Forecast pour la localisation des villes, et Open-Meteo Weather pour fournir des données météorologiques actualisées et fiables.",
      details: [
        "Interface agréable",
        "Design Mobile First",
        "Mode clair/sombre",
        "Gestion des APIs",
        "Optimisation des performances",
        "Déploiement en ligne"
      ],
      technicalStack: {
        frontend: ["React + Vite", "JavaScript", "Local storage", "Intelligence artificielle"],
        outils: ["API Open-météo", "UseState", "UseEffect", "Vercel"]
      }
    }
  }
  // Ajouter un nouveau projet ici. Ne pas oublier de mettre une virgule après le projet précédent.
];

function Projects() {
  // États pour la gestion des projets
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const projectsRef = useRef(null);

  // Configuration de l'animation au défilement
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 100); // Délai progressif pour chaque carte
            });
          }
        });
      },
      {
        threshold: 0.02
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, [filter]); // Réinitialiser l'animation quand le filtre change

  // Fonction de filtrage des projets
  const filterProjects = () => {
    switch (filter) {
      case 'recent':
        return [...projectsData].sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'old':
        return [...projectsData].sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'personal':
        return projectsData.filter(project => project.category === 'personnel');
      case 'school':
        return projectsData.filter(project => project.category === 'scolaire');
      default:
        return projectsData;
    }
  };

  // Composant Modale pour les détails du projet
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

            <h3>Date</h3>
            <p>{project.description.date}</p>

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
      <h2>Mes Projets</h2>
      <p>Tri des projets</p>
      <div className="filter-buttons">
        <div className="recentold-buttons">
          <button 
            className={filter === 'recent' ? 'active' : ''} 
            onClick={() => setFilter('recent')}
          >
            Les + récents
          </button>
          <button 
            className={filter === 'old' ? 'active' : ''} 
            onClick={() => setFilter('old')}
          >
            Les + anciens
          </button>
        </div>
        <div className="personalschool-buttons">
          <button 
            className={filter === 'personal' ? 'active' : ''} 
            onClick={() => setFilter('personal')}
          >
            Projets personnels
          </button>
          <button 
            className={filter === 'school' ? 'active' : ''} 
            onClick={() => setFilter('school')}
          >
            Projets scolaires
          </button>
        </div>
      </div>
      <div ref={projectsRef} className="projects-grid">
      {filterProjects().map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={`Illustration du projet ${project.name}`} className="project-image"/>
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
