import useAxiosSecure from '../../hooks/useAxiosSecure';
import useUsers from '../../hooks/useUsers';
import User from './User';

function Users() {
  const [data, refetch] = useUsers();
  const axiosSecure = useAxiosSecure();

  const users = data?.data || [];

  const handleDelete = (_id) => {
    try {
      (async () => {
        const { data } = await axiosSecure.delete(`/users/${_id}`);

        if (data?.success) {
          alert(data?.message);
          refetch();
        }
      })();
    } catch (error) {
      alert(error?.message);
    }
  };

  const handleChangeRole = (_id) => {
    try {
      (async () => {
        const { data } = await axiosSecure.patch(`/admins/${_id}/role`);
        if (data?.success) {
          alert(data?.message);
          refetch();
        }
      })();
    } catch (error) {
      console.error('Error changing role:', error);
      alert(error?.message || 'Failed to change user role.');
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <h1 className="mb-8 text-center text-2xl font-bold text-sky-500">
          Manage Users
        </h1>

        {/* Users Table */}
        <div>
          <h2 className="text-2xl font-bold text-sky-500 text-center mb-8">
            {users?.length === 1 ? 'User' : 'Users'}
          </h2>

          {/* Table Header */}
          <div className="text-center grid grid-cols-5 text-gray-400 text-sm font-semibold mb-2 border-b border-gray-700 pb-2">
            <div>#</div>
            <div>Name</div>
            <div>Email</div>
            <div>Role</div>
            <div>Action</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-700">
            {users?.map((user, idx) => (
              <User
                user={user}
                key={user._id}
                idx={idx}
                onDelete={handleDelete}
                onChangeRole={handleChangeRole}
              />
            ))}
          </div>

          {/* No Users Found */}
          {users?.length === 0 && (
            <div className="text-center py-6 text-gray-400">
              No users found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Users;
