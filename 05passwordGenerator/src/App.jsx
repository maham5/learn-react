import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length , setlength]  =useState(8);
  const [numberAllowed , setnumberAllowed] = useState(false);
  const [charAllowed , setcharAllowed] = useState(false);
  const [password , setpassword] = useState(" ")

  const passwordGenerator = useCallback(()=>{
      let pass='';
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed) str += "123456789";
      if(charAllowed) str +="@#$!%^&*(~`";
      for(let i =1 ; i <= length ; i++) {
       let char =( Math.floor(Math.random() * str.length +1));
       pass += str.charAt(char)
      }
      setpassword(pass)
  } , [length , numberAllowed , charAllowed , setpassword])

  const passwordref = useRef(null);
  const copytoClipboard = useCallback(()=>{
    passwordref.current?.select(password);
    passwordref.current?.setSelectionRange(0 , 3);


  window.navigator.clipboard.writeText(password);

  } , [password])
  useEffect(()=>{
    passwordGenerator()
  },[length ,numberAllowed ,charAllowed ,passwordGenerator]);
  return (
    <>
    <div className='ml-64'>
   <div className='w-full bg-slate-500  p-4 rounded-lg '>
   <p className='mb-2 text-black text-lg font-semibold'>Password generator</p>
    <div className='flex flex-wrap justify-center'>
   <input  className='bg-white p-2 text-black '
   type = "text"
   value={password}
   ref={passwordref}
    placeholder='Password'
    readOnly
    
   />
    <button onClick={copytoClipboard} 
    className='bg-blue-500 rounded-none'>Copy</button>

    </div>
    <div className='flex flex-wrap mt-4 gap-3 text-black font-semibold'>
<div className='flex flex-wrap gap-1'>

    <input  className=' cursor-pointer '
   type = "range"
   min={6}
   max={10}
   value={length}
   onChange={(e) =>{
    setlength(e.target.value)

   }}
   />
   <label>Length {length}</label>
   </div>
    
    <div className='flex flex-wrap gap-1'>
      <input  
      type="checkbox"
      defaultChecked={numberAllowed}
onChange={() =>{
  setnumberAllowed((prev) => !prev)
}}
      
      />
      <label>Numbers</label>
 
</div>
    <div className='flex flex-wrap gap-1'>
      <input  
      type="checkbox"
     defaultChecked={charAllowed}
      onChange={() =>{
        setcharAllowed((prev) => !prev)
      }}
      />
      <label>Characters</label>
    </div>
    </div>
      
     



</div>
</div>
    </>
  )
}

export default App
