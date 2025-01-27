import { Outlet } from 'react-router';
import DashboardNav from './DashboardNav';

const Dashboard = () => {
  const userRoutes = [{ path: '/dashboard/bookings', name: 'Bookings' }];
  const adminRoutes = [
    { path: '/dashboard/users', name: 'Users' },
    { path: '/dashboard/manage-items', name: 'Manage Items' },
  ];
  const mainRoutes = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <div className="grid grid-cols-12 gap-6 p-6">
          {/* Sidebar */}
          <div className="col-span-3 bg-gray-800 p-6 rounded-xl shadow-lg">
            <DashboardNav
              userRoutes={userRoutes}
              adminRoutes={adminRoutes}
              mainRoutes={mainRoutes}
            />
          </div>

          {/* Dashboard Content */}
          <div className="col-span-9 bg-gray-800 p-8 rounded-xl shadow-lg">
            <h1 className="mb-8 text-center text-4xl font-bold text-sky-500">
              Dashboard Overview
            </h1>
            {/* Display dashboard content here */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// **----------------***

// useEffect(() => {
//   if (user?.email) {
//     (async () => {
//       const { data } = await axiosSecure.get(
//         `/bookings/?email=${user?.email}`,
//         {
//           withCredentials: true,
//         }
//       );
//       setOrderedServices(data.data);
//     })();
//   }
// }, [user?.email]);

// **----------------***
