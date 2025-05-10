/* eslint-disable */

// Composant de la section Compétences
// Affiche une grille de compétences avec des barres de progression
import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { TbBrandMongodb, TbSeo } from "react-icons/tb";
import '../styles/Skills.css';

// Données des compétences avec leur niveau (A modifier si évolution)
const skillsData = [
  { name: "HTML", icon: <FaHtml5 />, level: 90 },
  { name: "CSS", icon: <FaCss3Alt />, level: 90 },
  { name: "JavaScript", icon: <FaJs />, level: 80 },
  { name: "React", icon: <FaReact />, level: 70 },
  { name: "Node", icon: <FaNodeJs />, level: 60 },
  { name: "MongoDB", icon: <TbBrandMongodb />, level: 70 },
  { name: "SEO", icon: <TbSeo />, level: 90 },
  { name: "GitHub", icon: <FaGithub />, level: 85 },
];


function Skills() {
  // Référence pour l'animation au défilement
  const skillsRef = useRef(null);

  useEffect(() => {
    // Configuration de l'Intersection Observer pour l'animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    // Nettoyage de l'observer
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className="skills">
      <h2>Mes compétences</h2>
      <div ref={skillsRef}  className="skills-grid">
      {skillsData.map((skill) => (
        <div key={skill.name} className="skill-card">
          <div className="infos">
            <i className="icon">{skill.icon}</i>
            <h3>{skill.name}</h3>
            <span>{skill.level}%</span>
          </div>
          <div className="progress-bar" style={{ "--progress": `${skill.level}%` }}></div>
        </div>
      ))}
    </div>
     
    </div>
  );
}

export default Skills;