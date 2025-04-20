import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaRegWindowClose } from 'react-icons/fa';
import '../styles/Navbar.css';

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const closeMenu = document.querySelector('.close-menu');
    const navbarLinks = document.querySelector('.navbar-links');

    function handleResize() {
      if (window.innerWidth > 900) {
        navbarLinks.classList.remove('open');
        navbarLinks.style.display = 'flex'; // S'assurer que le menu reste visible
        hamburger.style.display = 'none';
        closeMenu.style.display = 'none';
      } else {
        navbarLinks.style.display = 'none';
        hamburger.style.display = 'block';
        closeMenu.style.display = 'none';
      }
    }

    hamburger.addEventListener('click', () => {
      navbarLinks.classList.add('open');
      navbarLinks.style.display = 'flex'; // Assurer l'affichage correct
      hamburger.style.display = 'none';
      closeMenu.style.display = 'block';
    });

    closeMenu.addEventListener('click', () => {
      navbarLinks.classList.remove('open');
      navbarLinks.style.display = 'none';
      hamburger.style.display = 'block';
      closeMenu.style.display = 'none';
    });

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
    <div className="navbar-brand">
      <button onClick={() => scrollToSection('home')}>Bernard VERA</button>
      <span className="subtitle">Développeur web</span>
    </div>

    {/* Boutons hamburger et close-menu en dehors de navbar-links */}
    <button className="hamburger"><FaBars /></button>
    <button className="close-menu"><FaRegWindowClose /></button>

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
