import React from 'react'
import './Cards.css';

const Cards = (props) => {
  return (
    <>
    {props.details.map((value, index) => (
    <div className='card-container' key={index}>
      <div className="card-heading">
        <h2>{value.heading}</h2>
      </div>
      <div className="card-Counts">
        <span>No' of times Clicked: </span>{value.Counts}
      </div>
      <div className="imageUrl">
        <img src={value.img} alt="" />
      </div>
      <div className="nicknames">
        {value.nicknames}
      </div>
      <div className="category">
        {value.category}
      </div>
      <div className="attached">
        {value.attached}
      </div>
    </div>
    ))};
    </>
  )
}

export default Cards
