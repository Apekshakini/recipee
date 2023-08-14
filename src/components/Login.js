import React from 'react'
 import "./Login.css";
 import Layout from "./../components/Layout/Layout";
const Login = () => {
  return (
    
  
    <div className="d-flex justify-content-center align-items-center vh-100 "id="image">
    <div className="border border-3 border-dark p-3 bg-white">
        <form>
            <h2 className="text-center text-primary">Login</h2>
            <div className="mb-3">
                <label htmlFor='Email'>Email:</label>
                <input type="email" placeholder="Enter your email" className="form-control"/>
            </div>
            <div className="mb-3" >
                <label >Password:</label>
                <input type="password" placeholder="Enter Password" className="form-control"/>
            </div>
            <div className="mb-3" >
                <label >Remember your password:</label>
                <input type="checkbox" className="mx-2"/>
            </div>
            <div className="mb-3" >
                <label >forgot password</label>
                <input type="checkbox" className="mx-2"/>
            </div>
            <div className="d-grid">
                <button className="btn btn-success">Login</button>

            </div>
        </form>
    </div>
   </div>

  )
}

export default Login