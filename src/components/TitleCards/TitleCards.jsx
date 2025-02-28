import React from 'react'
import './TitleCards.css'
import dramas from '../../assets/data.js'

function TitleCards() {
  return (
    <div className='title-cards'>
      <h2>Top</h2>
      <div className="card-list">
        {dramas.map((drama,index) => {
          return <div className="drama" key={index}>
              <img src={drama.image}/>
              <p>{drama.title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
