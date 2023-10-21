import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate=useNavigate();
  return (
    <>
    <div className='home-outer col-md-6 col-sm-10'>
        <h3>welcome</h3>
        <div className='home-page'>
            <div>
                <p>New user</p>
<button onClick={()=>navigate('/register')}>Register</button>
</div>
<div>
    <p>Already have account</p>
<button onClick={()=>navigate('/Login')}>Signup</button>
</div>

        </div>


    </div>
    
    </>
  )
}

export default Home