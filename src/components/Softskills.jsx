/* eslint-disable */

import { useEffect, useRef } from 'react';
import '../styles/Softskills.css';

function Softskills() {
  const techRef = useRef(null);
  const lifeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (techRef.current) observer.observe(techRef.current);
    if (lifeRef.current) observer.observe(lifeRef.current);

    return () => {
      if (techRef.current) observer.unobserve(techRef.current);
      if (lifeRef.current) observer.unobserve(lifeRef.current);
    };
  }, []);

  return (
    <div className="softskills">
      <h2>Mes Soft skills</h2>
      <div className="softskills-content">
        <div ref={techRef} className="tech-skills">
          <h3>Soft skills techniques</h3>
          <ul>
            <li>Capacité d'apprentissage rapide</li>
            <li>Veille technologique constante</li>
            <li>Gestion du temps et des priorités</li>
            <li>Capacité d'analyse et de synthèse</li>
            <li>Résolution de problèmes complexes</li>
            <li>Rédaction technique claire</li>
            <li>Rigueur et attention aux détails</li>
            <li>Organisation et planification de projets</li>
            <li>Utilisation de l'IA (Copilot, Bolt, ChatGPT)</li>
          </ul>
        </div>
        <div ref={lifeRef} className="life-skills">
          <h3>Mon savoir-être</h3>
          <ul>
            <li>Créativité et innovation</li>
            <li>Autonomie et prise d'initiative</li>
            <li>Travail en équipe et collaboration</li>
            <li>Empathie et écoute active</li>
            <li>Communication efficace</li>
            <li>Adaptabilité et flexibilité</li>
            <li>Résilience face aux obstacles</li>
            <li>Toujours de bonne humeur</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Softskills;
