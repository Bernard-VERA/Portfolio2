
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/Navbar.css';

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <button onClick={() => scrollToSection('home')}>Bernard VERA</button>
        <span className="subtitle">Développeur web</span>
      </div>
      <div className="navbar-links">
        <button onClick={() => scrollToSection('home')}>Accueil</button>
        <button onClick={() => scrollToSection('about')}>À propos</button>
        <button onClick={() => scrollToSection('skills')}>Compétences</button>
        <button onClick={() => scrollToSection('projects')}>Projets</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
        <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;