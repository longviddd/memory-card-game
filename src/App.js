import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const cardImages = [
    { "src": "/img/helmet-1.png", matched: false},
    { "src": "/img/potion-1.png", matched: false},
    { "src": "/img/ring-1.png", matched: false},
    { "src": "/img/scroll-1.png", matched: false},
    { "src": "/img/shield-1.png", matched: false},
    { "src": "/img/sword-1.png", matched: false},
  ]
  const shuffleCards = () => {
      const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => {return Math.random() - 0.5})
      .map((card) => {return {...card, id: Math.random()}})
      setCards(shuffleCards);
      setTurns(0)
  }
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  useEffect(() => {
    const compareChoices = () => {
      
      if(choiceTwo && choiceOne){
        
        if(choiceTwo.src === choiceOne.src){
          setCards(prevCards => {
            return prevCards.map(card => {
              if(card.src === choiceOne.src){
                return {...card, matched: true}
              }else{
                return card
              }
            })
          })
        }else{
          console.log('those cards do not match')
        }
        resetTurn()
      }
    }
    compareChoices();
  }, [choiceOne, choiceTwo])
  console.log(cards)
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }
  return (
    
    <div className="App">
      {console.log(cards)}
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {
          cards.map(card => (
            <Card 
            key={card.id} 
            card = {card}
            handleChoice = {handleChoice} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
