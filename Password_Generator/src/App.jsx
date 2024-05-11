
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setlength]=useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [splCharAllowed,setsplCharAllowed] = useState(false)
  const [UppCase, setUppCase] = useState(false)
  const [LowCase, setLowCase] = useState(false)
  const [password, setPassword] = useState("")

  const password_ref = useRef(null)

  const Generate_pass = useCallback(()=>{
    let pass = ""
    let str = "ABVWklmnopqrXYZ"
    if(UppCase) str +="ABCDEFGHIJKLMNOPQRUSTVWXYZ"
    if(LowCase) str +="abcdefghijklmnopqrstuvwxyz"
    if(NumberAllowed) str +="0123456789"
    if(splCharAllowed) str +="!@#$%^&*-_+=[]{}~`"

    for(let i=1; i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length,NumberAllowed,splCharAllowed,UppCase,LowCase,setPassword])

  useEffect(()=>{
    Generate_pass()
  },[length,NumberAllowed,splCharAllowed,UppCase,LowCase,Generate_pass])

  const CopyToClipboard= useCallback(()=>{
    password_ref.current?.select()
    password_ref.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password])
  
 

  return (
   <>
   <div className="main_container">
      <h1 className='heading'>React Password Generator</h1>
      <div className="clr_container">
          <button className="btn" id="btn1"></button>
          <button className="btn" id="btn2"></button>
          <button className="btn" id="btn3"></button>
        </div>
      <div className="container">
        <div className="B_container">
          <i class="fa-solid fa-lock"></i>
          <h1 className='pass_sign'>****</h1>

          <h1 className='head_txt'>PASSWORD GENERATOR</h1>

          <h4 className='info_txt'>Create strong and secure passwords to keep your account safe</h4>
          <h4 className='info_txt online'>online.</h4>

          <input type="text"  className='input_txt' value={password} ref={password_ref}/>

          <button className='input_copy' 
          onClick={CopyToClipboard}>
          <i class="fa-solid fa-copy"></i>
          Copy</button>

          <h4 className='pass_len'>Password Length : {length}</h4>
          <input className='pass_range' 
          type="range"
          min={8}
          max={100}
          value={length}
          onChange={(e)=>{setlength(e.target.value)}}
          />

          <h4 className='add_info1'>Uppercase
          <input type="checkbox"
          className='add_info_checkbox'
          defaultChecked = {UppCase}
          onClick={()=>{
          setUppCase((prev)=> !prev)
          }}
          /></h4>

          <h4 className='add_info2'>Lowercase
          <input type="checkbox"
          className='add_info_checkbox'
          defaultChecked = {LowCase}
          onClick={()=>{
          setLowCase((prev)=> !prev)
          }}
          /></h4>

          <h4 className='add_info3'>Number
          <input type="checkbox"
          className='add_info_checkbox1'
          defaultChecked = {NumberAllowed}
          onClick={()=>{
          setNumberAllowed((prev)=> !prev)
          }}
          /></h4>

          <h4 className='add_info4'>Special Character
          <input type="checkbox"
          className='add_info_checkbox2'
          defaultChecked= {splCharAllowed}
          onClick={()=>{
          setsplCharAllowed((prev)=> !prev)
          }}
          /></h4>
        </div>
      </div>
   </div> 
   </>
  )
}

export default App
