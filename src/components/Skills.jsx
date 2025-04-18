import React from 'react';
import '../styles/Skills.css';

const skillsData = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Node", level: 70 },
  { name: "MongoDB", level: 70 },
  { name: "SEO", level: 90 },
  { name: "GitHub", level: 85 },
];


function Skills() {
  return (
    <div className="skills">
      <h1>Mes compétences</h1>
      <div className="skills-grid">
      {skillsData.map((skill) => (
        <div key={skill.name} className="skill-card">
          <div className="infos">
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