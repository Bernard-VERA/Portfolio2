import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { TbBrandMongodb, TbSeo } from "react-icons/tb";
import '../styles/Skills.css';

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
  return (
    <div className="skills">
      <h1>Mes compétences</h1>
      <div className="skills-grid">
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