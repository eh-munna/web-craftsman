import React from 'react';
import { useLoaderData } from 'react-router';

function Orders() {
  const orders = useLoaderData();

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-sky-500 text-center mb-8">
        Your Orders
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {orders.map((order) => (
          <div
            key={order.orderId}
            className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-200"
          >
            <h2 className="text-2xl font-bold text-sky-500 mb-4">
              Order #{order.orderId}
            </h2>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-gray-100">Customer:</span>{' '}
              {order.customerName}
            </p>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-gray-100">Date:</span>{' '}
              {order.orderDate}
            </p>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold text-gray-100">Status:</span>{' '}
              <span
                className={`font-bold ${
                  order.status === 'Delivered'
                    ? 'text-green-400'
                    : order.status === 'Pending'
                    ? 'text-yellow-400'
                    : 'text-blue-400'
                }`}
              >
                {order.status}
              </span>
            </p>
            <div className="mb-4">
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
            </div>
            <p className="text-gray-300 font-bold">
              Total:{' '}
              <span className="text-sky-500">
                ${order.totalAmount.toFixed(2)}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
