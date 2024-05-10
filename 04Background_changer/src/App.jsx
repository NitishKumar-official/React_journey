
import { useState } from 'react'
import './App.css'

function App() {

  const [Color, setColor]=useState('white')
  

  return (
   <><div className="bg_changer" style={{backgroundColor:Color}}>
      <div className="container">
        <h1 className='heading'>Background Changer</h1>
        <div className="color_GRID">
          <button onClick={()=>{setColor('red')}} className="clr" style={{backgroundColor:'red'}}></button>
          <button onClick={()=>{setColor('white')}} className="clr" style={{backgroundColor:'white'}}></button>
          <button onClick={()=>{setColor('green')}} className="clr" style={{backgroundColor:'green'}}></button>
          <button onClick={()=>{setColor('black')}} className="clr" style={{backgroundColor:'black'}}></button>
          <button onClick={()=>{setColor('yellow')}} className="clr" style={{backgroundColor:'yellow'}}></button>
          <button onClick={()=>{setColor('orange')}} className="clr" style={{backgroundColor:'orange'}}></button>
          <button onClick={()=>{setColor('purple')}} className="clr" style={{backgroundColor:'purple'}}></button>
          <button onClick={()=>{setColor('olive')}} className="clr" style={{backgroundColor:'olive'}}></button>
          <button onClick={()=>{setColor('blue')}} className="clr" style={{backgroundColor:'blue'}}></button>
          <button onClick={()=>{setColor('aqua')}} className="clr" style={{backgroundColor:'aqua'}}></button>
        </div>
     </div>
     </div>
   </>
  )
}

export default App
