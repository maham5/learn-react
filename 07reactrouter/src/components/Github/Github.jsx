import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

   /* const [data , setdata] =useState([])
    useEffect(() =>{
     fetch("https://api.github.com/users/maham5")
     .then(res => res.json())
     .then(data =>{
        console.log(data)
        setdata(data)
     })
    },[])*/

    const data =useLoaderData()
    return (
        <>
        
       <div className='bg-gray-600 text-white text-center w-full  p-2 font-semibold text-3xl '>Github Followers: {data.followers} 
     <img src={data.avatar_url} alt="Git_picture"   width={300}/>
       </div>
       
        </>
    )
}

export default Github

export const githubinfo = async()=>{
    const resp = await fetch("https://api.github.com/users/maham5")
    return resp.json();
}