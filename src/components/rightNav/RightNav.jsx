import React from 'react'
import "../rightNav/RightNav.css"
const RightNav = () => {
  function savebtn(){
    // provide a storage which will store the data
  }
  function resetbtn(){
    // it will restore the data as it is
  }
  return (
    <>
    <div className="right-nav">
      <form>
        <button className='btn1'>Open New Form</button><br />
      <h3> Cat Name:</h3><input type='text' name='name' placeholder='Cat number here...' /><br />
       <h3> Cat Image:</h3><input type='img' name='catimg' placeholder='Cat Image here...'/><br />
       <h3> Cat Clicks:</h3><input type='number' name='clicks' placeholder='Cat Clicks here...'/><br /><br />
        <button className='save-btn' onClick={() => savebtn()}>Save</button>
        <button className='undo-btn' onClick={() => resetbtn()}>Undo</button><br />

      </form>
    </div>
    </>
  )
}

export default RightNav
