import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/Navbar.css';

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Bernard VERA</Link>
        <span className="subtitle">Développeur web</span>
      </div>
      <div className="navbar-links">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/skills">Compétences</Link>
        <Link to="/contact">Contact</Link>
        <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
</button>

      </div>
    </nav>
  );
}

export default Navbar;