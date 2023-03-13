import React from 'react'
import "./Center.css"
import Cards from '../Cards/Cards'
import CardData from '../CardData/CardData'
import Homes from '../Home/Home'
const Center = (props) => {
  return (
    <div className="card-details">
      {/* <Cards details={CardData} 
      /> */}
      <Homes />
      
    </div>
  )
}

export default Center
