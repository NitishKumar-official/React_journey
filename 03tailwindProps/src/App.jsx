import Card from './components/Card'
import './App.css'

function App() {

  const  arr = [2,4,5]
  let myobj = {
    key : "artist",
    age: 5
  }


  return (
    <>
    <h1 className='bg-green-400'>Tailwind Test</h1>

    {/* <Card Username = "Rana" BtnText = "Click Me" obj={myobj}/>  we can pass props as array, object, string, etc
    <Card Username = "Nitish"  BtnText = "Visit Me" myarr= {arr} /> */}
    <Card Username = "Rana" BtnText = "Click Me" obj={myobj}/>   
    <Card Username = "Nitish"  BtnText = "Visit Me" myarr= {arr} />
    </>
  )
}

export default App
