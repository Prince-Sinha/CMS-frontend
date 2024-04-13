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
import Verify from './components/Verify'
import Signin from './components/Signin'
import { Check } from './hooks/Auth'
const router = createBrowserRouter([
  { path : '/', element : <Root />,
    id : 'root',
    children : [
      {index:true , element : <Details /> ,loader : Check},
      {path : 'assignment' , element : <Assignment />, loader : Check},
      {path : 'verify' , element : <Verify /> , loader: Check},
      
    ]
  },
  {  path : '/signin', element : <Signin /> }
  
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
