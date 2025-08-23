import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-xl font-bold text-blue-600 mb-8">SkillSwap</h2>
        <nav className="space-y-4">
          <Link to="/dashboard" className="block text-gray-700 hover:text-blue-600"> Home</Link>
          <Link to="/dashboard/skills" className="block text-gray-700 hover:text-blue-600"> My Skills</Link>
          <Link to="/dashboard/explore" className="block text-gray-700 hover:text-blue-600"> Explore</Link>
          <Link to="/dashboard/profile" className="block text-gray-700 hover:text-blue-600"> Profile</Link>
          <button className="w-full bg-red-500 text-white p-2 rounded-lg mt-6 hover:bg-red-600">Logout</button>
        </nav>
      </aside>

      
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome , User 👋</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-700">My Skills</h2>
            <p className="text-gray-500">View & manage your listed skills.</p>
            <Link to="/dashboard/skills" className="text-blue-600 mt-2 inline-block">Go →</Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-700">Explore Skills</h2>
            <p className="text-gray-500">Find skills from other people to learn.</p>
            <Link to="/dashboard/explore" className="text-blue-600 mt-2 inline-block">Explore →</Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-700">Profile</h2>
            <p className="text-gray-500">Update your profile & preferences.</p>
            <Link to="/dashboard/profile" className="text-blue-600 mt-2 inline-block">Edit →</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
