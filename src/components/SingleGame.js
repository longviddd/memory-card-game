import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';
import './SingleGame.css'

export default function SingleGame() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
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
      setChoiceOne(null);
      setChoiceTwo(null);
      setCards(shuffleCards);
      setTurns(0)
  };
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  useEffect(() => {
    
    const compareChoices = () => {
      
      if(choiceTwo && choiceOne){
        setDisabled(true);
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
          resetTurn();
        }else{
          setTimeout(() => resetTurn(), 1000)
        }
        
      }
    }
    compareChoices();
  }, [choiceOne, choiceTwo])
  useEffect(() => {
    shuffleCards();
  }, [])
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }
  return (
    <div className="SingleGame">
      <h1>Single Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {
          cards.map(card => (
            <Card 
            key={card.id} 
            card = {card}
            handleChoice = {handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled} />
          ))
        }
      </div>
      <p>Turns: {turns}</p>
    </div>
  )
}
