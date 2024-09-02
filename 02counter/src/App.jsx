

import { useState } from 'react'
import './App.css'

function App() {
 let [Counter , setCounter] = useState(15);

 const addValue=()=>{
  if(Counter < 20){
  setCounter(Counter + 1);
  } 
 }

 const removeValue =()=>{
  if(Counter > 0){
    setCounter(Counter - 1);
  }
 }

  return (
    <>
   <h1>Counter</h1>
   <p>Counter value : {Counter}</p>
   <button onClick={addValue}>Add value</button>
   <br/>
   <br/>

   <button onClick={removeValue}>Remove value</button>

   </>
  )
}

export default App
