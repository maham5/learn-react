import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Root from './root.jsx';
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx';
import Github, { githubinfo } from './components/Github/Github.jsx';
import User from './components/User/user.jsx';

/*const router = createBrowserRouter(
  [
    {
      path :'/',
      element : <Root/>,
      children : [
        {
          path: "",
          element :<Home/>
        },
        {
        path :"about",
         element : <About/>
        },
         {
        path :"contact",
          element : <Contact/>
        },
        {
        loader;
        path:"github",
        element:<Github/>
        }


      ]
    }
  ]
)*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<Root/>}>
    <Route path=""  element={<Home/>}/>
    <Route path="about"  element={<About/>}/>
    <Route path="contact"  element={<Contact/>}/>
    <Route path="user/:id"  element={<User/>}/>
    <Route loader={githubinfo}
     path="github"  element={<Github/>}/>





    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
