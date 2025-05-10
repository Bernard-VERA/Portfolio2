// Point d'entrée principal de l'application
// Gère la structure globale et le routage entre les différentes sections
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Softskills from './components/Softskills'
import MemoryGame from './components/MemoryGame';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <section id="softskills">
            <Softskills />
          </section>
          <section id="memory-game">
            <MemoryGame />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App
