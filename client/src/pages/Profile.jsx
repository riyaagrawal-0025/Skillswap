import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { UserCircle } from 'lucide-react'; 

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [skills, setSkills] = useState(user.skills.join(", "));

  const handleSave = () => {
    setUser({
      ...user,
      name,
      email,
      skills: skills.split(",").map(s => s.trim())
    });
    alert("✅ Profile Updated");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            <UserCircle size={64} className="text-gray-500" />
          </div>
          <h2 className="text-2xl font-bold mt-4">Profile</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              placeholder="Enter Name" 
              className="border rounded-lg p-2 w-full mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              placeholder="Enter Email" 
              className="border rounded-lg p-2 w-full mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Skills</label>
            <input 
              type="text" 
              value={skills} 
              onChange={e => setSkills(e.target.value)} 
              placeholder="E.g. Web development, Guitar, DSA" 
              className="border rounded-lg p-2 w-full mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <button 
          onClick={handleSave} 
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Profile;

