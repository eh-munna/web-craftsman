import { Link } from 'react-router';

function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-gray-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-sky-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-lg mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to={'/'}
          className="inline-block bg-sky-500 text-gray-900 border-2 border-sky-500 hover:bg-gray-700 hover:text-white hover:border-gray-700 py-2 px-4 rounded-full transition duration-200"
        >
          Let's Go Home
        </Link>
      </div>
    </div>
  );
}
export default ErrorPage;
