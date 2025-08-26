import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    if (email && password) {
      navigate("/dashboard");
    }
  };


  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-2xl shadow-md w-96'>
        <h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>Login to <span>SkillSwap</span></h2>

        <form onSubmit={handleLogin} className='space-y-4'>
          <input type="email" placeholder='Email' className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none' value={email} onChange={(e) => setEmail(e.target.value)}
            required></input>
          <input type="password" placeholder='Password' className='w-full p-3 border rounded-lg focus:rinf-2 focus:ring-blue-500 outline-none' value={password} onChange={(e) => setPassword(e.target.value)}
            required></input>
          <button type="submit" className='w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition'>Login</button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-medium">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login;
