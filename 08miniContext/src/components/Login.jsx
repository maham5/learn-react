import { useState , useContext } from "react"
import React  from 'react'
import UserContext from "../context/Usercontext"


function Login() {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setuser} =  useContext(UserContext)
    const handleSubmitt =(e) =>{
  e.preventDefault()
  setuser({username,password})
    }

    return (
        <>
         <input type='text' 
         value={username}
         onChange={(e) =>{
         setUsername(e.target.value)
         }}

         placeholder="username"/>
         <input type='password'
          value={password}
          onChange={(e) =>{
          setPassword(e.target.value)
          }}
         placeholder="Enter Password"/>
         <button onClick={handleSubmitt}>Submitt</button>

        </>
        
    )
}

export default Login
