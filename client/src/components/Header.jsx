import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray shadow-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <img src="\image.png" alt="SkillSwap Logo" className="w-10 h-10"  />
            <span>SkillSwap</span>
        </div>
        <nav className="space-x-6">
            <Link to ="/"  className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to ="/about"  className="text-gray-700 hover:text-blue-600">About Us</Link> 
            <Link to ="/contact"  className="text-gray-700 hover:text-blue-600">Contact Us</Link> 
        </nav>
    </header>
  )
}

export default Header
