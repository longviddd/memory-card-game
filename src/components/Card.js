import React from 'react'
import style from './Card.module.css'

export default function Card({ frontSrc}) {
  return (
    <div className={style.card}>
        <div>
            <img className="front" src={frontSrc} alt="card-front" />
            <img className="back" src='/img/cover.png' alt="card-back" />
        </div>
    </div>
  )
}
