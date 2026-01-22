/* eslint-disable */
// Composant de la section "À propos"
// Présente une brève biographie avec animation
import { useEffect, useRef } from 'react';
import '../styles/About.css';

function About() {
  // Référence pour l'élément à observer
  const contentRef = useRef(null);

  useEffect(() => {
    // Configuration de l'Intersection Observer pour l'animation au défilement
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    // Nettoyage de l'observer lors du démontage du composant
    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="about">
      <h2>À propos</h2>
      <div ref={contentRef} className="about-content">
        <div>
        <p>
          Passionné d’informatique depuis toujours, j’ai choisi d’en faire mon métier en me spécialisant dans le développement web full-stack. Soucieux d’enrichir mon parcours autodidacte, j’ai suivi une formation diplômante chez OpenClassrooms. Cela m’a permis d’acquérir des compétences solides, pour concevoir des sites web intuitifs et performants.<br/>
          Curieux et toujours en quête d’amélioration, je souhaite mettre mon expertise et ma créativité au service de projets innovants, afin de répondre au mieux aux besoins des utilisateurs. 
        </p>
        </div>
        <img src="/images/dessin.jpg" alt="Avatar" className="avatar" />
        <p>
         <br /> Mon objectif : créer et maintenir des sites performants, sécurisés et intuitifs.<br />
          - Création de sites web modernes, rapides et sur mesure.<br />
          - Refonte et amélioration de sites existants.<br />
          - Maintenance technique et suivi continu.<br />
          - Optimisation SEO et référencement.<br />
          - Mise en place et gestion de bases de données.<br />
          - Sécurisation de sites et protection des données.<br />
          - Optimisation des performances (vitesse, UX, stabilité).<br />
          - Déploiement et mise en production fiables.<br />
        </p>
      </div>
    </div>
  );
}

export default About;