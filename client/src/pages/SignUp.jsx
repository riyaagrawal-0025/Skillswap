import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard')
    }
  }, [])

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const data = { name, email, password }
      const response = await axios.post('http://localhost:5000/api/user/signup', data);
      if (response.status == 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-2xl shadow-md w-96'>
        <h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>Create your <span>SkillSwap</span> account</h2>

        <form onSubmit={handleSignup} className='space-y-4'>
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder='Email' className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none' value={email} onChange={(e) => setEmail(e.target.value)}
            required></input>
          <input type="password" placeholder='Password' className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none' value={password} onChange={(e) => setPassword(e.target.value)}
            required></input>
          <button type="submit" className='w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition'>Sign Up</button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp;
