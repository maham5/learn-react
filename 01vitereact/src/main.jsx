
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import React from 'react'

/*const reactelement = React.createElement(
  "a",
  {href:"https://www.google.com", target:"_blank"},
  "click here"

)*/

const createElement = React.createElement(
 "a",
 {href : "https://google.com" , target:"_blank"},
 "click to visit"
  
)

createRoot(document.getElementById('root')).render(

  
  createElement

)
