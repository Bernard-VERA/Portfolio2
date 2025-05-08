import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { FaX } from "react-icons/fa6";
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
    const navButtons = document.querySelectorAll('.navbar-links button'); 
  
    function handleResize() {
      if (window.innerWidth > 900) {
        navbarLinks.classList.remove('open');
        navbarLinks.style.display = 'flex';
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
      navbarLinks.style.display = 'flex';
      hamburger.style.display = 'none';
      closeMenu.style.display = 'block';
    });
  
    closeMenu.addEventListener('click', () => {
      navbarLinks.classList.remove('open');
      navbarLinks.style.display = 'none';
      hamburger.style.display = 'block';
      closeMenu.style.display = 'none';
    });
  
    // Ajout de l'événement de fermeture aux liens uniquement si l'écran est inférieur à 900px
    navButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          navbarLinks.classList.remove('open');
          navbarLinks.style.display = 'none';
          hamburger.style.display = 'block';
          closeMenu.style.display = 'none';
        }
      });
    });
  
    window.addEventListener('resize', handleResize);
    handleResize();
  
    return () => {
      window.removeEventListener('resize', handleResize);
      navButtons.forEach(button => {
        button.removeEventListener('click', () => {
          if (window.innerWidth <= 900) {
            navbarLinks.classList.remove('open');
            navbarLinks.style.display = 'none';
            hamburger.style.display = 'block';
            closeMenu.style.display = 'none';
          }
        });
      });
    };
  }, []);
  
  

  return (
    <nav className="navbar">
    <div className="navbar-brand">
      <button onClick={() => scrollToSection('home')}>Bernard VERA</button>
      <span className="subtitle">Développeur web</span>
    </div>

    {/* Boutons hamburger et close-menu en dehors de navbar-links */}
    <button className="hamburger" aria-label="Ouvrir menu"><FaBars /></button>
    <button className="close-menu" aria-label="Fermer menu"><FaX /></button>

    <div className="navbar-links">
      <button onClick={() => scrollToSection('home')}>Accueil</button>
      <button onClick={() => scrollToSection('about')}>À propos</button>
      <button onClick={() => scrollToSection('skills')}>Compétences</button>
      <button onClick={() => scrollToSection('projects')}>Projets</button>
      <button onClick={() => scrollToSection('contact')}>Contact</button>
      <button onClick={() => scrollToSection('softskills')}>Softskills</button>
      <button onClick={() => scrollToSection('memory-game')}>Jeu</button>
      <button className="theme-toggle" aria-label="Changer thème" onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  </nav>
);
}

export default Navbar;
