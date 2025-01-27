import useAuth from '../../hooks/useAuth';

function DashboardHome() {
  const { user } = useAuth();
  return (
    <>
      <>
        <div className="flex flex-col items-center justify-center min-h-[75vh] bg-gray-900">
          <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">
            <span className="block">
              {user ? `Hi, ${user?.displayName}!` : `Hi!`}
            </span>
            <span className="block">
              Welcome to your dashboard. Your summary goes here.
            </span>
          </h2>

          <p className="text-lg text-gray-300 text-center mb-6">
            This is a simple app on top Firebase Authentication, Routing, and
            some Advanced Backend Technologies
          </p>
          <div className="flex flex-col gap-3 w-1/5"></div>
        </div>
      </>
    </>
  );
}
export default DashboardHome;
