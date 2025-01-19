import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
  const { data: loadedUser } = useLoaderData();

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUserData = { name, email };
    form.reset();
    (async () => {
      const response = await fetch(
        `http://localhost:3000/users/${loadedUser?._id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedUserData),
        }
      );
      const { data } = await response.json();
      if (data.modifiedCount > 0) {
        alert('User data updated successfully!');
      } else {
        alert('Error updating user data!');
      }
    })();
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="w-1/3 bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">Update User</h2>
          <form onSubmit={handleUpdateUser}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={loadedUser?.name}
                className="w-full mt-1 p-2 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={loadedUser?.email}
                className="w-full mt-1 p-2 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="you@example.com"
              />
            </div>

            <button className="w-full bg-sky-500 text-gray-900 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-full transition duration-200">
              Update User
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
