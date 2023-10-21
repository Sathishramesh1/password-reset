import { Form } from 'formik';
import React, { useState } from 'react'

function Forget() {
    const [email,setEmail]=useState({email:""})

const hanldeSubmit= async(e)=>{
    e.preventDefault();

    try {
        
    const config = {
        method: 'POST',
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(email)
    }

const user= await fetch('http://localhost:3000/api/forget/forgetPassword',config);
const data = await user.json();

              // enter you logic when the fetch is successful
                 console.log(data);
                 document.getElementById("email").value=""
                 setEmail({email:""})
}
 catch (error) {
            console.log("Error in fetching data",error)
             }


}


const handlechange=(event)=>{
    event.preventDefault();
      setEmail({...email,email:event.target.value})
      console.log(email)
}


  return (
    <div>
         <h1>Forget Password</h1>
         <form id="my-form" method='post' onSubmit={hanldeSubmit}>
         <div className="mb-3 col-md-6 mx-auto">
      <label htmlFor="email" name='email'className="form-label d-flex justify-content-start">Email</label>
      <input
        type="email"
        className="form-control"
        id="email"
        name='email'
        placeholder="Enter the Registered Email Id"
        onChange={handlechange}
        
      />
      
    </div>
    <div className="d-grid mt-5 col-md-6 mx-auto">
      <button className="btn btn-primary" type="submit"
      >Reset</button>
    </div>
    </form>




    </div>
  )
}

export default Forget