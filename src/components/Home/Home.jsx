import { useEffect, useState } from 'react';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/users');
      const { data } = await response.json();
      setUsers(data);
    })();
  }, []);

  const handleSendUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const userData = { name, email };

    (async () => {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const { data } = await response.json();
      if (data?.insertedId) {
        alert('User data sent successfully!');
        const response = await fetch('http://localhost:3000/users');
        const { data } = await response.json();
        setUsers((prevUsers) => [...prevUsers, data]);
        form.reset();
      } else {
        alert('Error sending user data!');
      }
    })();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">
          Hi! Welcome to the Backend Integration
        </h2>
        <p className="text-lg text-gray-300 text-center mb-6">
          This is a an example app for backend stuff integration.
        </p>

        <p className="text-lg text-gray-300 text-center mb-6">
          Total Users: {users?.length > 0 ? users?.length : 0}
        </p>

        <div className="w-1/3 bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">
            Creating a new user
          </h2>
          <form onSubmit={handleSendUser}>
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
                className="w-full mt-1 p-2 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 text-gray-900 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-full transition duration-200"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Home;
