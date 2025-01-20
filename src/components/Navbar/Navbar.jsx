import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Make sure this is 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';

function Navbar() {
  const { user, userSignOut, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await userSignOut();
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('Error during sign-out:', error.code, error.message);
    }
  };

  const routes = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/bookings', name: 'Bookings' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <nav className="bg-gray-900 text-sky-500 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-white">
            YourLogo
          </NavLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          {/* Render the main routes */}
          {routes.map(({ path, name }) => {
            if (name === 'Bookings' && !user) {
              return null; // Skip rendering Orders if user is not logged in.
            }
            return (
              <li key={name}>
                <NavLink to={path} className="hover:text-white">
                  {name}
                </NavLink>
              </li>
            );
          })}

          {/* Conditionally render auth links */}
          {!user ? (
            <>
              <li>
                <NavLink to="/login" className="hover:text-white">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup" className="hover:text-white">
                  Signup
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink to="/login" className="hover:text-white">
                <button onClick={handleSignOut} className="hover:text-white">
                  Logout
                </button>
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
