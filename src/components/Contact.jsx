import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-content">
        <p>N'hésitez pas à me contacter pour discuter de vos projets !</p>
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/bernardvera" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/Bernard-VERA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a 
            href="mailto:bernard.vera@hotmail.com" 
            className="social-link"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;