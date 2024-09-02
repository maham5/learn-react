
import {useState} from "react"
function App() {
  //const [count, setCount] = useState(0)
const [color,setcolor] = useState("olive")
  return (
    <>
    <div  className="w-full h-screen" style={{backgroundColor : color}}>
      <div className="fixed bottom-11 flex flex-wrap justify-center inset-x-0 px-2" >
        <div className="flex flex-wrap justify-center gap-3 bg-white px-2  py-1 rounded-lg">
<button className="p-2 bg-red-800 text-white rounded-full " onClick={()=>{setcolor("red")}}>
  Red
</button>
<button className="p-2  text-white rounded-full " style={{backgroundColor:"green"}} onClick={()=>{setcolor("green")}}>
  Green
</button><button className="p-2 text-white rounded-full " style={{backgroundColor:"blue"}} onClick={()=>{setcolor("blue")}}>
  Blue
</button><button className="p-2  text-white rounded-full " style={{backgroundColor:"gray"}} onClick={()=>{setcolor("gray")}}>
  Gray
</button><button className="p-2  text-white rounded-full " style={{backgroundColor:"pink"}} onClick={()=>{setcolor("pink")}}>
  Pink
</button><button className="p-2  text-white rounded-full " style={{backgroundColor:"purple"}} onClick={()=>{setcolor("purple")}}>
  Purple
</button>
        </div>
       
      </div>
    </div>
     
    </>
  )
}

export default App
