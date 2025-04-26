import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <h2>À propos</h2>
      <div className="about-content">
        <div>
        <p>
        Passionné d’informatique depuis toujours, j’ai choisi d’en faire mon métier en me spécialisant dans le développement full-stack.<br/>
        Soucieux d’enrichir mon parcours autodidacte, j’ai suivi une formation diplômante chez OpenClassrooms. Cela m’a permis d’acquérir des compétences solides, pour concevoir des expériences web intuitives et performantes.<br/>
        Curieux et toujours en quête d’amélioration, je mets mon expertise au service de projets innovants, alliant technicité et créativité, pour répondre aux besoins des utilisateurs. 
        </p>
        </div>
        <img src="/images/portrait.jpg" alt="Avatar" className="avatar" />
      </div>
    </div>
  );
}

export default About;