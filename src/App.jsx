
import { useState } from 'react'
import './App.css'

function App() {

  const [upper,setupper] = useState(false);
  const [lower,setlower] = useState(false);
  const [number,setnumber] = useState(false);
  const [symbol,setsymbol] = useState(false);
  const [length,setlength] = useState(8);
  const [password,setpassword] = useState('')
  
  const uppercases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercases = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-?/';
  let setchar ="";

  upper ? setchar+=uppercases:"";
  lower ? setchar+=lowercases:"";
  number ? setchar+=numbers:"";
  symbol ? setchar+=symbols:"";
  
  let passdone=""
  function generatepassword(){
    for(let i=0;i<length;i++){
      const randomindex = Math.floor(Math.random() * setchar.length);
      passdone+=setchar[randomindex];
    }
    setpassword(passdone);
  }
  function copyfun(){
    navigator.clipboard.writeText(password);
    alert('Text Copied Successfully')
  }
  return (
    <div className='app-container'>
      <h1>strong password generator</h1>
      <div className='input-num'>
        <label htmlFor="pass-length">password length:
          <input type="number" id='pass-length' value={length} onChange={(event)=>setlength(event.target.value)}/>
        </label>
      </div>
      <div className='upper'>
        <label htmlFor="upper">
          <input style={{width:"20px", height:"20px"}} type="checkbox" checked={upper} onChange={(event)=>setupper(event.target.checked)} id='upper'/> include uppercase
        </label>
      </div>
      <div className='lower'>
        <label htmlFor="lower">
          <input style={{width:"20px", height:"20px"}} type="checkbox" checked={lower} onChange={(event)=>setlower(event.target.checked)} id='lower'/> include lowercase
        </label>
      </div>
      <div className='number'>
        <label htmlFor="number">
          <input style={{width:"20px", height:"20px"}} type="checkbox" id='number' checked={number} onChange={(event)=>setnumber(event.target.checked)}/> include number
        </label>
      </div>
      <div className='symbols'>
        <label htmlFor="symbols">
          <input style={{width:"20px", height:"20px"}} type="checkbox"  id='symbol' checked={symbol} onChange={(event)=>setsymbol(event.target.checked)}/> include symbol
        </label>
      </div>
      <button onClick={generatepassword} className='gen-pass'>generate password</button>
      <div className='copy'>
      <input type="text" readOnly value={password}/>
      <button onClick={copyfun}>copy</button>
      </div>
    </div>
  )
}

export default App