function ManageService({ service, idx, onDelete, onEdit }) {
  return (
    <>
      <div className="text-center grid grid-cols-5 items-center text-gray-300 text-sm py-4 hover:bg-gray-800 transition duration-200">
        <div>{idx + 1}</div>
        <div className="truncate">{service.title}</div>
        <div className="truncate">{service.description}</div>
        <div className="truncate">{service.category}</div>
        <div className="flex justify-center gap-2">
          {/* Delete Button */}
          <button
            onClick={() => onDelete(service._id)}
            className="py-1 px-3 rounded text-white bg-red-500 hover:bg-red-600 transition duration-200"
          >
            Delete
          </button>

          {/* Edit Button */}
          <button
            onClick={() => onEdit(service._id)}
            className="py-1 px-3 rounded transition duration-200 font-medium bg-sky-500 text-gray-900 hover:bg-gray-700 hover:text-white"
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default ManageService;
