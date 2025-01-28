import { useState } from 'react';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useServices from '../../hooks/useServices';
import ManageService from './ManageService';

function ManageServices() {
  const [services, refetch] = useServices();
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceId, setServiceId] = useState(null);
  const [modalMessage, setModalMessage] = useState('');

  const handleDelete = (_id) => {
    setServiceId(_id);
    setModalMessage('Are you sure you want to delete this service?');
    setIsModalOpen(true);
  };
  const confirmDelete = () => {
    try {
      if (serviceId) {
        (async () => {
          const { data } = await axiosSecure.delete(`/services/${serviceId}`);

          if (data?.success) {
            toast.success(`${data?.message}`);
            refetch();
          }
        })();
        setIsModalOpen(false);
        setServiceId(null);
      }
    } catch (error) {
      toast.error(`${error?.message}`);
    }
  };

  const cancelModal = () => {
    setIsModalOpen(false);
    setServiceId(null);
  };

  const handleEdit = (_id) => {
    setModalMessage(
      'The edit functionality is not available at the moment and will be added later.'
    );
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <h1 className="mb-8 text-center text-2xl font-bold text-sky-500">
          Manage Services
        </h1>

        {/* Services Table */}
        <div>
          <h2 className="text-2xl font-bold text-sky-500 text-center mb-8">
            {services?.length === 1 ? 'Service' : 'Services'}
          </h2>

          {/* Table Header */}
          <div className="text-center grid grid-cols-5 text-gray-400 text-sm font-semibold mb-2 border-b border-gray-700 pb-2">
            <div>#</div>
            <div>Title</div>
            <div>Description</div>
            <div>Category</div>
            <div>Action</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-700">
            {services?.map((service, idx) => (
              <ManageService
                service={service}
                key={service._id}
                idx={idx}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>

          {/* No Services Found */}
          {services?.length === 0 && (
            <div className="text-center py-6 text-gray-400">
              No services found.
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Are you sure you want to delete this service?
            </h2>
            <div className="flex justify-between gap-4">
              <button
                onClick={confirmDelete}
                className="py-1 px-3 rounded bg-red-500 text-white hover:bg-red-600"
              >
                Yes, Delete
              </button>
              <button
                onClick={cancelDelete}
                className="py-1 px-3 rounded bg-gray-300 text-gray-700 hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )} */}

      {/* Modal for delete confirmation or edit unavailability */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">{modalMessage}</h2>
            <div className="flex justify-between gap-4">
              {serviceId ? (
                <>
                  <button
                    onClick={confirmDelete}
                    className="py-1 px-3 rounded bg-red-500 text-white hover:bg-red-600"
                  >
                    Yes, Delete
                  </button>
                  <button
                    onClick={cancelModal}
                    className="py-1 px-3 rounded transition duration-200 font-medium bg-sky-500 text-gray-900 hover:bg-gray-700 hover:text-white"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={cancelModal}
                  className="py-1 px-3 rounded transition duration-200 font-medium bg-sky-500 text-gray-900 hover:bg-gray-700 hover:text-white"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageServices;
