import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0);
  const cardImages = [
    { "src": "/img/helmet-1.png"},
    { "src": "/img/potion-1.png"},
    { "src": "/img/ring-1.png"},
    { "src": "/img/scroll-1.png"},
    { "src": "/img/shield-1.png"},
    { "src": "/img/sword-1.png"},
  ]
  const shuffleCards = () => {
      const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => {return Math.random() - 0.5})
      .map((card) => {return {...card, id: Math.random()}})
      setCards(shuffleCards);
      setTurns(0)
  }
  console.log(cards,turns)
  return (
    
    <div className="App">
      {console.log(cards)}
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {
          cards.map(card => (
            <div className="card" key={card.id}>
              <div>
                <img src={card.src} className="front" alt="card front"/>
                <img src="/img/cover.png" className="back" alt="card back"/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
