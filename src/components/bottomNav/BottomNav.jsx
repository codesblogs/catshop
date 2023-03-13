import React from 'react'
import "../bottomNav/BottomNav.css"
import Cards from '../Cards/Cards'
import CardData from '../CardData/CardData'

const BottomNav = () => {
  return (
    <div className='btm'>
      <Cards details={CardData}/>
    </div>
  )
}

export default BottomNav
