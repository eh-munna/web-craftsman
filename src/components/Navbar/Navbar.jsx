import React from 'react';
import { NavLink } from 'react-router';

function Navbar() {
  const routes = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/contact', name: 'Contact' },
    { path: '/signup', name: 'Signup' },
    { path: '/login', name: 'Login' },
  ];

  return (
    <nav className="bg-gray-900 text-sky-500 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to={'/'} className="hover:text-white">
            YourLogo
          </NavLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          {routes.map(({ path, name }) => (
            <li key={path}>
              <NavLink to={path} className="hover:text-white">
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
