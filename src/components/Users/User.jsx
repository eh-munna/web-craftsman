function User({ user, idx, onDelete, onChangeRole }) {
  return (
    <>
      <div className="text-center grid grid-cols-5 items-center text-gray-300 text-sm py-4 hover:bg-gray-800 transition duration-200">
        <div>{idx + 1}</div>
        <div className="truncate">{user.name}</div>
        <div className="truncate">{user.email}</div>
        <div>
          <span className="py-1 px-3 rounded text-sm text-white bg-blue-500">
            {user.role}
          </span>
        </div>
        <div className="flex justify-center gap-2">
          {/* Delete Button */}
          <button
            onClick={() => onDelete(user._id)}
            className="py-1 px-3 rounded text-white bg-red-500 hover:bg-red-600 transition duration-200"
          >
            Delete
          </button>

          {/* Role Changing Button */}
          <button
            onClick={() => onChangeRole(user._id)}
            disabled={user.role === 'admin'}
            className="py-1 px-3 rounded text-white bg-sky-500 hover:bg-sky-600 transition duration-200"
          >
            Change Role
          </button>
        </div>
      </div>
    </>
  );
}
export default User;
