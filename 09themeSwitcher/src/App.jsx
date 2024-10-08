
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextprovider } from './context/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
 const [themeMode , setthememode] = useState("light");

 const darkTheme =() =>{
  setthememode("dark")
   }
 
 
 const lightTheme=()=>{
  setthememode("light")
 }

 //actual change in theme 
 useEffect(()=>{
  document.querySelector('html').classList.remove("light" ,"dark");
  document.querySelector('html').classList.add(themeMode);
 } ,[themeMode])


  return (
    <ThemeContextprovider value={{themeMode , darkTheme , lightTheme}}>
      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

     
    </ThemeContextprovider>
  )
}

export default App
