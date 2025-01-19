import { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const UserManagement = () => {
  const { data: loadedUsers } = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDeleteUser = (userId) => {
    (async () => {
      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'DELETE',
      });
      const { data } = await response.json();
      if (data.deletedCount > 0) {
        const remainingUsers = users.filter((user) => user._id !== userId);
        setUsers(remainingUsers);
      }
    })();
  };

  return (
    <>
      <div className="p-6 bg-gray-900 text-gray-300">
        <h1 className="text-sky-500 text-3xl mb-4">User Management</h1>
        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user._id}
              className="flex justify-between items-center p-4 bg-gray-800 rounded-lg"
            >
              <div>
                <h3 className="text-sky-500">{user.name}</h3>
                <p className="text-gray-300">{user.email}</p>
              </div>
              <div className="space-x-4">
                <Link
                  to={`/users/${user._id}`}
                  className="bg-sky-500 text-gray-900 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition duration-200 font-medium"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDeleteUser(user._id)}
                  className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white py-2 px-4 rounded-lg transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserManagement;
