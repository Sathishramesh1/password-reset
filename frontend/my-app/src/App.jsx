import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import Forget from './components/Forget'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import ResetPage from './components/ResetPage'
import Login from './components/Login'
import Protected from './components/Protected'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
  }

  return (
    <>
    
       <div className='container mt-5'>
       
<BrowserRouter>
    <Routes>
     <Route Component={Home} exact path='/home' />
     <Route Component={Register}  path='/Register' />
     <Route element={<Login setToken={setToken}/>}  path='/Login' />
     <Route element={ token? <Protected logout={logout}/>:<Navigate to='/Login'/>} path='/protected'/>
     <Route Component={Forget}  path='/ForgetPassword' />
     <Route Component={ResetPage}  path='/Reset/:token' />

    </Routes>
    
    </BrowserRouter>
       </div>
    </>
  )
}

export default App
