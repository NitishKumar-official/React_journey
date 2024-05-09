import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  // let counter = 15;

  const Add = ()=>{
    setCounter(counter+1)
  }

  const Remove = ()=>{
    if(counter>0)
    setCounter(counter-1)

  }

  return (
    <>
      <div className='container'>
        <h1 className='heading'>Counter project</h1>
        <h3 className='current'>Current:{counter}</h3>

        <button className='button'
        onClick={Add}
        >AddCount</button>

        <button className='button'
        onClick={Remove}
        >RemoveCount</button>
    </div>
    </>
  )
}

export default App
