import React, { useState } from 'react'

function Login({setToken}) {
    const[user,setUser]=useState({
        email:""
        ,password:""});

    const handleLogin=async(e)=>{
        e.preventDefault();
        try {
            const config = {
                method: 'POST',
                headers: {
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            }
            const response = await fetch('http://localhost:3000/api/register/login',config)
              
              
            const data = await response.json();
              // enter you logic when the fetch is successful
                 console.log(data.token);
                 const {token}=data.token;
                 setToken(token);
                 localStorage.setItem('token', token);
   
        } catch (error) {
            console.log("error",error)
        }
        


    }    
    
const handlechange=(e)=>{
    e.preventDefault();
    setUser({...user,[e.target.name]: e.target.value })

}


  return (
    <div> 
        <h1>Login</h1>
        <form method='post' onSubmit={handleLogin}>
         <div className="mb-3 col-md-6 mx-auto">
      <label htmlFor="email" name='email' className="form-label d-flex justify-content-start">Name</label>
      <input
        type="email"
        className="form-control"
        id="email"
        name='email'
        placeholder="User Email"
        onChange={handlechange}
        
      />

    </div>
    <div className="mb-3 col-md-6 mx-auto">
      <label htmlFor="password" name='password' className="form-label d-flex justify-content-start">Password</label>
      <input
        type="password"
        className="form-control"
        id="password"
        name='password'
        placeholder="Password"
        onChange={handlechange}
        
      />
       
         </div>
    <div className="d-grid mt-5 col-md-6 mx-auto">
      <button className="btn btn-primary" type="submit">Login</button>
    </div>


    </form>




    </div>
  )
}

export default Login