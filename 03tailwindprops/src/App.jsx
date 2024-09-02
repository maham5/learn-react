//import { useState } from 'react'


import './App.css'
import Cards from './components/Cards'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="bg-blue-500 mb-4">Tailwind CSS</h1>

     <Cards name="maham" btntext="visit me"/>
    </>
  )
}

export default App
