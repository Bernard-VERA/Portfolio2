// Composant Footer
// Affiche le pied de page avec copyright et bouton de retour en haut
import { FaArrowAltCircleUp } from "react-icons/fa";
import '../styles/Footer.css';

function Footer() {
  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left-space">
        </div>
        <div className="footer-text">
        <p>&copy; {new Date().getFullYear()} - Bernard VERA</p>
        <p>Tous droits réservés</p>
        </div>
        <div className='scroll-to-top' onClick={scrollToTop} aria-label="retour en haut de page">
        <FaArrowAltCircleUp />
        </div>
      </div>
    </footer>
  );
}

export default Footer;