import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

function Bookings() {
  const { user } = useContext(AuthContext);

  const [orderedServices, setOrderedServices] = useState([]);

  useEffect(() => {
    if (user?.email) {
      (async () => {
        const response = await fetch(
          `http://localhost:3000/bookings/?email=${user?.email}`
        );
        const { data } = await response.json();
        setOrderedServices(data);
      })();
    }
  }, [user?.email]);

  const handleDelete = (_id) => {
    (async () => {
      const response = await fetch(`http://localhost:3000/bookings/${_id}`, {
        method: 'DELETE',
      });
      const { data } = await response.json();
      if (data.deletedCount) {
        alert(`Booking is deleted successfully!`);
        setOrderedServices(orderedServices.filter((s) => s._id !== _id));
      }
    })();
  };

  if (orderedServices.length < 1) {
    return (
      <div className="container mx-auto py-12 px-4 w-2/3 flex flex-col items-center justify-center min-h-[75vh]">
        <h1 className="text-4xl font-bold text-sky-500 text-center mb-8">
          You don't have any booking
        </h1>
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-sky-500 text-center mb-8">
          Your{' '}
          {orderedServices?.length && orderedServices.length < 1
            ? `Booking`
            : `Bookings`}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orderedServices.map((service, idx) => (
            <div
              key={service._id}
              className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-200"
            >
              <h2 className="text-2xl font-bold text-sky-500 mb-4">
                Order #{idx + 1}
              </h2>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold text-gray-100">Service:</span>{' '}
                {service.serviceTitle}
              </p>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold text-gray-100">Customer:</span>{' '}
                {service.customer.name}
              </p>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold text-gray-100">Date:</span>{' '}
                {service.bookingDate}
              </p>
              <p className="text-gray-300 mb-4">
                <span className="font-semibold text-gray-100">Status:</span>{' '}
                <span
                  className={`font-bold ${
                    service.status === 'delivered'
                      ? 'text-green-400'
                      : service.status === 'pending'
                      ? 'text-yellow-400'
                      : 'text-blue-400'
                  }`}
                >
                  {service.status}
                </span>
              </p>
              {/* <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-100 mb-2">
                  Items Ordered:
                </h3>
                <ul className="text-gray-300">
                  {order.items.map((item, index) => (
                    <li key={index} className="mb-1">
                      {item.quantity}x {item.productName} -{' '}
                      <span className="font-semibold text-gray-100">
                        ${item.price.toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div> */}
              {/* <p className="text-gray-300 font-bold">
                Total:{' '}
                <span className="text-sky-500">
                  ${order.totalAmount.toFixed(2)}
                </span>
              </p> */}
              <button
                onClick={() => {
                  handleDelete(service._id);
                }}
                className="py-2 px-4 rounded-full text-white bg-sky-500 hover:bg-gray-900 transition duration-200"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bookings;
