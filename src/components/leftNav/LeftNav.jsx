import React, { useEffect, useState } from 'react'
import "../leftNav/LeftNav.css"
import { SidebarData } from '../../Data/Data';
import CardData from '../CardData/CardData';
import Center from '../center/Center';

const LeftNav = () => {
    const [selected, setSelected] = useState(0);

  const [expaned, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
 
  
  return (
    <>
    
    <div className='Sidebar'>
        
        {/*title  */}
        <div className="logo">
            <span>C<span>A</span>T</span>
        </div>
        {/* menu */}
        <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)} 
              id="ids"
            >
                
              <h3>{item.heading}</h3>
              <span>{item.Counts}</span>
              
              
            </div>
          );
        })}
        {/* {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <h3>{item.heading}</h3>
              <span>{item.Counts}</span>
            </div>
          );
        })} */}
        </div>
        
     </div>
    </>
  );
};

export default LeftNav
