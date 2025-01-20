import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

function Services() {
  const { data: services } = useLoaderData();

  return (
    <>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-sky-500 text-center mb-8">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-200"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{service.icon}</span>
                <h2 className="text-2xl font-bold text-sky-500">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <Link
                to={`/services/checkout/${service._id}`}
                // className="mt-auto bg-sky-500 text-white px-4 py-2 rounded-full font-medium hover:bg-sky-600 transition duration-200"
                className="mt-auto bg-sky-500 text-gray-900 hover:bg-gray-900 hover:text-white py-2 px-4 rounded-full transition duration-200"
              >
                <span className="inline-flex items-center justify-center gap-3">
                  Checkout <FaArrowRight />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
