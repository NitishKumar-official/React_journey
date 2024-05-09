import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



/*hm directly function yha bhi likh sakte hain jo ki jsx return krta ho*/
function MyApp() {
 
  return (
    <h1>i am rana g</h1>  
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp />  {/* jis tarah se function call hota hai waise hi yha se function call krte hain  */}
    <App />
  </React.StrictMode>,
)
