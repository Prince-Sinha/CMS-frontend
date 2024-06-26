import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SideBar from './components/Sidebar'
import Assignment from './components/Assignment'
import Details from './components/Details'
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Root from './pages/Root'
import FloorSection from './pages/FloorSection'
import ChooseG from './pages/ChooseG'
import ChooseT from './pages/ChooseT'
import Verify from './components/Verify'
import Login from './components/Login'
import Signin from './components/Signin'
import { Check , checkAuth } from './hooks/Auth'
const router = createBrowserRouter([
  { path : '/admin', element : <Root />, loader : checkAuth,
    id : 'root',
    children : [
      {path : 'details', element : <Details /> ,loader : Check},
      {path : 'assignment' , element : <Assignment />, loader : Check},
      {path : 'verify' , element : <Verify /> , loader: Check},
      
    ]
  },
  {  path : '/', element : <Signin /> },
  { path : '/login' , element : <Login />},
  {
     path : '/:Id' , element : <FloorSection /> , loader : checkAuth,
     children : [
      { path : ':floorid', element : <ChooseG /> , loader : checkAuth },
      { path : ':floorid/:gen',element: <ChooseT />, loader : checkAuth },
     ]
  },
  
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <Header />
        <main id="sidebar">
             <SideBar />
          
          <div id="bar-sider">
              <Assignment/>
              <Details />
          </div>
          </main>
        </div> */}
       <RouterProvider router = {router}/>
    </>
  )
}

export default App
