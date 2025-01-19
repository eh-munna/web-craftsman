import React from 'react';
import { NavLink } from 'react-router-dom'; // Make sure this is 'react-router-dom'

function Navbar() {
  const routes = [
    { path: '/', name: 'Home' },
    { path: '/users', name: 'User Management' },
  ];

  return (
    <nav className="bg-gray-900 text-sky-500 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
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
            return (
              <li key={name}>
                <NavLink to={path} className="hover:text-white">
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
