import { updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../providers/AuthProvider';

function Signup() {
  const { user, setUser, createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    // Sign up logic goes here
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        updateProfile(loggedUser, { displayName: name });
        setUser(loggedUser);
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error:', errorCode, errorMessage);
      });
    // navigate('/');
  };

  if (user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">
          Welcome, {user.displayName}!
        </h2>
        <div className="flex gap-3">
          <Link to="/" className="">
            <button className="bg-sky-500 text-gray-900 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-full transition duration-200 font-medium">
              Go to Homepage
            </button>
          </Link>
          {/* <Link to="/" className="">
            <button
              onClick={handleSignOut}
              className="bg-sky-500 text-gray-900 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-full transition duration-200 font-medium"
            >
              Logout
            </button>
          </Link> */}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-gray-200 p-8 rounded-lg shadow-xl w-full max-w-sm">
        <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">
          Welcome!
        </h2>
        <p className="text-sm text-gray-400 text-center mb-6">
          Sign up to enjoy
        </p>
        <form onSubmit={handleSignup}>
          {/* Email Input */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-2 p-3 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Type your name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 p-3 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-2 p-3 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-sky-500 text-gray-900 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-full transition duration-200 font-medium"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 flex items-center gap-4">
          <span className="flex-grow h-px bg-gray-600"></span>
          <span className="text-sm text-gray-400">Or login with</span>
          <span className="flex-grow h-px bg-gray-600"></span>
        </div>

        {/* Google Login Button */}
        <div className="mt-4 flex gap-3 justify-center">
          <button
            // onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 bg-gray-700 border border-sky-500 hover:border-sky-700 text-gray-300 hover:bg-gray-600 py-2 px-4 rounded-lg transition duration-200"
            type="button"
          >
            <FcGoogle />
            <span>Google</span>
          </button>
          <button
            // onClick={}
            className="flex items-center justify-center gap-2 bg-gray-700 border border-sky-500 hover:border-sky-700 text-gray-300 hover:bg-gray-600 py-2 px-4 rounded-lg transition duration-200"
            type="button"
          >
            <FaGithub />
            <span>Github</span>
          </button>
        </div>

        {/* Signup Link */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Have an account?{' '}
          <Link
            to="/login"
            className="text-sky-500 hover:underline hover:text-sky-400 transition duration-200"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Signup;
