import { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaPython, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiRedux, SiTailwindcss } from 'react-icons/si';
import '../styles/MemoryGame.css';

const ICONS = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <FaGithub />, name: 'GitHub' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <FaDocker />, name: 'Docker' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiRedux />, name: 'Redux' },
  { icon: <SiTailwindcss />, name: 'Tailwind' }
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const selectedIcons = ICONS.slice(0, 6);
    const pairedIcons = [...selectedIcons, ...selectedIcons];
    const shuffledCards = pairedIcons
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({ ...item, id: index }));
    
    setCards(shuffledCards);
    setFlippedIndices([]);
    setMatchedPairs([]);
    setMoves(0);
    setGameWon(false);
  };

  const handleCardClick = (index) => {
    if (
      flippedIndices.length === 2 ||
      flippedIndices.includes(index) ||
      matchedPairs.includes(cards[index].name)
    ) {
      return;
    }

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      setMoves(moves + 1);
      const [firstIndex, secondIndex] = newFlippedIndices;
      
      if (cards[firstIndex].name === cards[secondIndex].name) {
        setMatchedPairs([...matchedPairs, cards[firstIndex].name]);
        setFlippedIndices([]);
        
        if (matchedPairs.length + 1 === 6) {
          setGameWon(true);
        }
      } else {
        setTimeout(() => {
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  const isCardFlipped = (index) => {
    return flippedIndices.includes(index) || matchedPairs.includes(cards[index].name);
  };

  return (
    <div className="memory-game">
      <h2>Memory Game</h2>
      <p className="game-description">
        Testez votre mémoire en trouvant les paires de technologies !
      </p>
      <div className="game-stats">
        <span>Coups : {moves}</span>
        <button className="reset-button" onClick={initializeGame}>
          Nouvelle partie
        </button>
      </div>
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${isCardFlipped(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-front"></div>
              <div className="card-back">
                {card.icon}
                <span className="icon-name">{card.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {gameWon && (
        <div className="win-message">
          <h3>Félicitations !</h3>
          <p>Vous avez gagné en {moves} coups !</p>
        </div>
      )}
    </div>
  );
}

export default MemoryGame;