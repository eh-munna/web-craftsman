function Booking({ booking, idx }) {
  return (
    <div className="text-center grid grid-cols-7 items-center text-gray-300 text-sm py-4 hover:bg-gray-800 transition duration-200">
      <div>{idx + 1}</div>
      <div className="truncate">{booking.serviceTitle}</div>
      <div className="truncate">{booking.customer.name}</div>
      <div>{booking.bookingDate}</div>
      <div>€{booking.price}</div>
      <div>
        <span
          className={`font-bold ${
            booking.status === 'delivered'
              ? 'text-green-400'
              : booking.status === 'pending'
              ? 'text-yellow-400'
              : 'text-blue-400'
          }`}
        >
          {booking.status}
        </span>
      </div>
      <div className="">
        <button
          onClick={() => handleDelete(booking._id)}
          className="py-1 px-3 rounded text-white bg-sky-500 hover:bg-sky-600 transition duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Booking;
