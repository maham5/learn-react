

import './App.css'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './components/login'
import Profile from './components/Profile'

function App() {
  

  return (
    <Usercontextprovider>
     <h1>Api Context</h1>
     <Login/>
     <Profile/>
    </Usercontextprovider>
  )
}

export default App
