import React from 'react'

const Middle = () => {
  return (
    <div className='main_box'>
      <center>
        <h1 >Question</h1>
      </center>
      <p className='number'>1 of 15</p>
      <center>
        <p className='question'>Which is the only mammal that can jump?</p>
        <div className="options">
              <div className="options-1">
                <button className="btn">Dog</button> &nbsp;&nbsp;
                <button className="btn">Elephant</button>
              </div>
              <div className="options-2">
                <button className="btn">Goat</button> &nbsp;&nbsp;
                <button className="btn">Lion</button>
              </div>
              <div className="options-3">
                <button className="previous_Btn">Previous</button>&nbsp;
                <button className="next_Btn">Next</button>&nbsp;
                <button className="quit_Name">Quit</button>&nbsp;
              </div>
            </div>

      </center>
    </div>
  )
} 

export default Middle
