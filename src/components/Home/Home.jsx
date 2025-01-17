import { Link } from 'react-router';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">
        Welcome to the React Authentication
      </h2>
      <p className="text-lg text-gray-300 text-center mb-6">
        This is a simple example of React authentication using Firebase.
      </p>
      <div className="flex flex-col gap-3 w-1/5">
        <Link
          to="/login"
          className="w-full text-center bg-sky-500 text-gray-900 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-full transition duration-200 font-medium"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
export default Home;
