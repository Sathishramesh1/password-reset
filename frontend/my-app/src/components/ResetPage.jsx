import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ResetPage() {
    const navigate=useNavigate()
    const {token}=useParams();
    const[isreseted,setreset]=useState(false);
    const [password,setpassword]=useState({password:""})

    const handleReset=async (e)=>{
      e.preventDefault();
        try {
            const config = {
                method: 'POST',
                headers: {
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(password)
            }
            const response = await fetch(`https://password-reset-wegn.onrender.com/api/reset//resetPassword/${token}`,config)
            const data = await response.json();
              // enter you logic when the fetch is successful
                 console.log(data);
                setpassword({password:""})
                setreset(true)
                navigate("/login")
        } catch (error) {

            console.log("Error in Resetting the Password",error);
            
        }
       

    }

    const handleChange=(event)=>{
        event.preventDefault();
        setpassword({...password,password:event.target.value})

    }


  return (
    <div> 
        <h1>Reset Password</h1>
        <form onSubmit={()=>{handleReset()}} method='post' >
        <div className="mb-3 col-md-6 mx-auto">
      <label htmlFor="password" name='password' className="form-label d-flex justify-content-start">Password</label>
      <input
        type="password"
        className="form-control"
        id="password"
        name='password'
        placeholder="Password"
        onChange={handleChange}
        required
       
      />
    </div>
    <div className="d-grid mt-5 col-md-6 mx-auto">
      <button className="btn btn-primary" type="submit">Reset</button>
    </div>
        </form>
        <div className='mt-5'>
          {isreseted?<p>password reset successful</p>:null}

        </div>
    </div>
    
  )
}

export default ResetPage