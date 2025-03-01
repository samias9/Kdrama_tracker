import React from 'react'
import dramas from '../../assets/data.js'

function SuggestionCards() {
  return (
    <div className='title-cards'>
        <h2>Today's suggestions:</h2>
        <div className="card-list">
            {dramas.map((drama,index) => {
                return <div className="drama" key={index}>
                    <img src={drama.image} alt='drama image' />
                    <p>{drama.title}</p>
                </div>
            })}
        </div>

    </div>
  )
}

export default SuggestionCards
