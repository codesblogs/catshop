import React from 'react'
import Boots from '../../Images/Boots.jpg'
import './Home.css'
const Homes = () => {
    return (
        <>
        
        <div className='card-containers' >
          <div className="card-headings">
            <h2>Boots</h2>
          </div>
          <div className="card-Counts">
            <span>No' of times Clicked: </span>28
          </div>
          <div className="imageUrls">
            <img src={Boots} alt="" />
          </div>
          <div className="nicknames">
            Boots, Booty, Boo
          </div>
          <div className="category">
            Middile age Cat
          </div>
          <div className="attached">
            sharp
          </div>
        </div>
        
        </>
      )
}

export default Homes
