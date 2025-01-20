// import React, { useContext, useState } from 'react';
// import { useLoaderData } from 'react-router';
// import { AuthContext } from '../../providers/AuthProvider';

// function ServiceCheckout() {
//   const { data: service } = useLoaderData();
//   const { user } = useContext(AuthContext);

//   // State to manage user input
//   const [userData, setUserData] = useState({
//     name: user?.displayName,
//     email: user?.email,
//     date: '',
//   });

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic for submitting the form (e.g., send data to a server)
//     console.log('Service booking details:', {
//       service,
//       userData,
//     });
//     // You can reset the form or show a success message
//     setUserData({ name: '', email: '', date: '' });
//   };

import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../providers/AuthProvider';

function ServiceCheckout() {
  const navigate = useNavigate();
  const { data: service } = useLoaderData();
  const { user } = useContext(AuthContext);

  // State to manage user input
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    date: '',
  });

  // Synchronize state with user context
  useEffect(() => {
    if (user) {
      setUserData((prevData) => ({
        ...prevData,
        name: user.displayName || '',
        email: user.email || '',
      }));
    }
  }, [user]);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const orderedService = {
      serviceTitle: service.title,
      service: service._id,
      serviceId: service.serviceId,
      customer: {
        name: userData.name,
        email: userData.email,
      },
      bookingDate: userData.date,
      status: 'pending',
    };

    // Logic for submitting the form
    (async () => {
      const response = await fetch(`http://localhost:3000/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderedService),
      });

      if (!response.ok) {
        const { message } = await response.json();
        if (response.status === 409) {
          alert(`${message}`);
          // navigate('/services');
          return;
        }
      }

      const { data } = await response.json();

      if (data?.insertedId) {
        alert(`"${service.title}" is booked successfully!`);
        navigate('/bookings');
      }
      // Reset the form
      setUserData((prevData) => ({
        ...prevData,
        date: '',
      }));
    })();
  };

  return (
    <>
      <div className="container mx-auto py-12 px-4 w-2/3">
        <h1 className="text-4xl font-bold text-sky-500 text-center mb-8">
          Book a Service
        </h1>
        <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-200 mb-8">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">{service.icon}</span>
            <h2 className="text-2xl font-bold text-sky-500">{service.title}</h2>
          </div>
          <p className="text-gray-300 mb-4">{service.description}</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-gray-200 rounded-lg"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-gray-200 rounded-lg"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-300 mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={userData.date}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-gray-200 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 text-gray-900 hover:bg-gray-900 hover:text-white py-2 px-4 rounded-full transition duration-200"
          >
            Book Service
          </button>
        </form>
      </div>
    </>
  );
}

export default ServiceCheckout;
