import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, []);


  return (
    <header className="bg-gray shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="\image.png" alt="SkillSwap Logo" className="w-10 h-10" />
        <span>SkillSwap</span>
      </div>
      <nav className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
        {!auth && <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"> Signup / Signin
        </Link>}
        {auth && <button onClick={() => { localStorage.removeItem('token') }} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"> Signout
        </button>}
      </nav>
    </header>
  )
}

export default Header
