import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar/> 
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome , User 👋</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-700">My Skills</h2>
            <p className="text-gray-500">View & manage your listed skills.</p>
            <Link to="/skills" className="text-blue-600 mt-2 inline-block">Go →</Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-700">Explore Skills</h2>
            <p className="text-gray-500">Find skills from other people to learn.</p>
            <Link to="/explore" className="text-blue-600 mt-2 inline-block">Explore →</Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-700">Profile</h2>
            <p className="text-gray-500">Update your profile & preferences.</p>
            <Link to="/profile" className="text-blue-600 mt-2 inline-block">Edit →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
