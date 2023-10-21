import React, { useState } from 'react'
import { useFormik } from 'formik';




function Register() {
const [user,setUser]=useState({})

    const validate = values => {
    const errors = {};
          if (!values.name) {
            console.log(values)
          errors.name = ' Name Required'; 
        }
        if (!values.email) {
          errors.email = ' Email Required';
        } 
        if (!values.password) {
          errors.password = 'Password Required';
        } 
        
        return errors;
      };

      const handleRegister= async(user)=>{
        try {
            const config = {
                method: 'POST',
                headers: {
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            }
            const response = await fetch('http://localhost:3000/api/signup',config)
            const data = await response.json();
              // enter you logic when the fetch is successful
                 console.log(data);
   
        } catch (error) {
            console.log("error",error)
        }
        


      }
    

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '',
        },
        validate ,
        
        onSubmit:( values) => {
    
            setUser({...values});
            console.log(user)
            handleRegister({...values});

            formik.values.name='';
            formik.values.email='';
            formik.values.password='';


          
        },
        
      });

      

  return (
    <>
    <div>
        <h1>Create a New User</h1>
        <form  onSubmit={formik.handleSubmit} method='post'>
    <div className="mb-3 col-md-6 mx-auto">
      <label htmlFor="name" name='name' className="form-label d-flex justify-content-start">Name</label>
      <input
        type="text"
        className="form-control"
        id="name"
        name='name'
        placeholder="Enter name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
       {formik.errors.name? <div style={{color:'red'}}>{formik.errors.name}</div> : null}
    </div>
    <div className="mb-3 col-md-6 mx-auto">
      <label htmlFor="email" name='email'className="form-label d-flex justify-content-start">Email</label>
      <input
        type="text"
        className="form-control"
        id="email"
        name='email'
        placeholder="Enter Email Id"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
       {formik.errors.email? <div style={{color:'red'}}>{formik.errors.email}</div> : null}
    </div>
    <div className="mb-3 col-md-6 mx-auto">
      <label htmlFor="password" name='password' className="form-label d-flex justify-content-start">Password</label>
      <input
        type="password"
        className="form-control"
        id="password"
        name='password'
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
       {formik.errors.password? <div style={{color:'red'}}>{formik.errors.password}</div> : null}
    </div>
    <div className="d-grid mt-5 col-md-6 mx-auto">
      <button className="btn btn-primary" type="submit">Register</button>
    </div>


    </form>


    </div>
    
    
    </>
  )
}

export default Register