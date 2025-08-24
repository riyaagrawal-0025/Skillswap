import React from 'react'
import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <div className='w-64 h-screen bg-gray-700 text-white flex flex-col p-4'>
        <h2 className='text-2xl font-bold mb-6'>SkillSwap</h2>
        <nav className='flex flex-col gap-4'>
            <Link to="/dashboard" className='hover:bg-gray-700 p-2 rounded'>Dashboard</Link>
            <Link to="/skills" className='hover:bg-gray-700 p-2 rounded'>My Skills</Link>
            <Link to="/explore" className='hover:bg-gray-700 p-2 rounded'>Explore</Link>
            <Link to="/profile" className='hover:bg-gray-700 p-2 rounded'>Profile</Link>
            <button className='mt-auto bg-red-600 hover:bg-red-700  p-2 rounded'>Logout</button>
        </nav>
      
    </div>
  )
}

export default Sidebar

