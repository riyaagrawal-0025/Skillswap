import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [skills, setSkills] = useState(user.skills.join(","));

  const handleSave = () => {
    setUser({
      ...user,
      name,
      email,
      skills: skills.split(",").map(s => s.trim())
    });
    alert("Profile Updated");
  }
  return (
    <div className="p-6">
      <h2 className='text-2xl font-bold mb-4'>Edit Profile</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter Name' className="border p-2 w-full mb-2"></input>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Name' className="border p-2 w-full mb-2"></input>
      <input type="text" value={skills} onChange={e => setSkills(e.target.value)} placeholder='Enter skills' className="border p-2 w-full mb-2"></input>
      <button onClick={handleSave} className='bg-blue-500 text-white px-4 py-2 rounded'>Save</button>
    </div>
  )
}

export default Profile
