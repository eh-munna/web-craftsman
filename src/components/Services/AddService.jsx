import { useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AddService = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    icon: '',
  });
  const axiosSecure = useAxiosSecure();

  const categories = [
    'Job Search',
    'Guidance',
    'Documentation',
    'Skill Development',
    'Training',
    'Professional Networking',
  ];
  // Options for the dropdown

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const { data } = await axiosSecure.post(`/services`, formData);
        if (data?.success) {
          toast.success('Service created successfully!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          });
          // Reset form
          setFormData({
            title: '',
            description: '',
            category: '',
            price: '',
            icon: '',
          });
        }
      } catch (error) {
        console.error('Error adding service:', error.message);
      }
    })();

    console.log('Form submitted: ', formData);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-900 text-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-sky-500 mb-4">
        Create a New Service
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-400">
            Service Title
          </label>
          <input
            required
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter service title"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-400">
            Description
          </label>
          <textarea
            required
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter service description"
            rows="4"
          ></textarea>
        </div>

        {/* Category (Dropdown) */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-400">
            Category
          </label>
          <select
            required
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-400">
            Price
          </label>
          <input
            required
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter price"
          />
        </div>

        {/* Icon */}
        <div className="mb-4">
          <label htmlFor="icon" className="block text-gray-400">
            Icon
          </label>
          <input
            required
            type="text"
            id="icon"
            name="icon"
            value={formData.icon}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter an emoji (e.g., 📝)"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="py-2 px-4 rounded-lg transition duration-200 font-medium bg-sky-500 text-gray-900 hover:bg-gray-700 hover:text-white w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddService;
