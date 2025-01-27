import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useBookings from '../../hooks/useBookings';
import Booking from './Booking';

function Bookings() {
  const { user } = useAuth();
  const [data, refetch] = useBookings();
  const bookings = data?.data || [];
  const axiosSecure = useAxiosSecure();

  const handleDelete = (_id) => {
    if (user && user?.email) {
      (async () => {
        const { data } = await axiosSecure.delete(
          `http://localhost:3000/bookings/${_id}`
        );
        if (data?.success) {
          alert('Booking deleted successfully!');
        } else {
          alert('Error deleting booking!');
        }
        refetch();
      })();
    }
  };

  if (bookings?.length === 0) {
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
      <div className="bg-gray-900 min-h-screen">
        <div className="container mx-auto py-12 px-4">
          <h1 className="mb-8 text-center text-2xl font-bold text-sky-500">
            Manage your bookings and view statistics.
          </h1>

          {/* Stats Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-xl">
              <h2 className="text-lg font-bold text-sky-500">Total Bookings</h2>
              <p className="text-3xl font-bold text-white">
                {bookings?.length || 0}
              </p>
            </div>
            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-xl">
              <h2 className="text-lg font-bold text-sky-500">
                Pending Bookings
              </h2>
              <p className="text-3xl font-bold text-yellow-400">
                {bookings?.filter((s) => s.status === 'pending').length || 0}
              </p>
            </div>
            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-xl">
              <h2 className="text-lg font-bold text-sky-500">
                Delivered Bookings
              </h2>
              <p className="text-3xl font-bold text-green-400">
                {bookings?.filter((s) => s.status === 'delivered').length || 0}
              </p>
            </div>
          </div>

          {/* Bookings Table */}
          <div>
            <h2 className="text-2xl font-bold text-sky-500 text-center mb-8">
              Your {bookings?.length === 1 ? 'Booking' : 'Bookings'}
            </h2>

            {/* Table Header */}
            <div className="text-center grid grid-cols-7 text-gray-400 text-sm font-semibold mb-2 border-b border-gray-700 pb-2">
              <div>#</div>
              <div>Service</div>
              <div>Customer</div>
              <div>Date</div>
              <div>Price</div>
              <div>Status</div>
              <div>Action</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-700">
              {bookings?.map((booking, idx) => (
                <Booking booking={booking} key={booking._id} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookings;
