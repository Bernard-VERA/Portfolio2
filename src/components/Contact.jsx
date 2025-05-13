// Composant de la section Contact
// Affiche les liens vers les réseaux sociaux et le CV
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from "react-icons/fa";
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-content">
        <p>N'hésitez pas à me contacter pour discuter de vos projets !</p>
        <div className="social-links">
        <a 
            href="mailto:bernard.vera@hotmail.com" 
            className="social-link"
            aria-label="Envoyer Email"
          >
            <FaEnvelope />
            <span>M'envoyer un mail</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/bernardvera" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Profil LinkedIn"
          >
            <FaLinkedin />
            <span>Mon profil LinkedIn</span>
          </a>
          <a 
            href="https://github.com/Bernard-VERA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Profil GitHub"
          >
            <FaGithub />
            <span>Mon profil GitHub</span>
          </a>
          <a 
            href="/documents/mon_cv.pdf"
            download 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Download CV"
          >
            <FaFilePdf />
            <span>Télécharger mon CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;