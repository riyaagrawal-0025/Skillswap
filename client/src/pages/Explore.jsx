import { useEffect, useState } from "react";

function Explore() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      { id: 1, name: "Aarav", skills: ["Web Dev", "DSA"] },
      { id: 2, name: "Ishita", skills: ["Guitar", "Singing"] },
      { id: 3, name: "Shiv", skills: ["Photography", "Editing"] },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🌍 Explore People</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">
              Skills: {user.skills.join(", ")}
            </p>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
