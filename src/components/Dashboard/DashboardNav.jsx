import { NavLink } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

function DashboardNav({ userRoutes, adminRoutes, mainRoutes }) {
  const [isAdmin] = useAdmin();

  return (
    <>
      <nav className="bg-gray-900 text-white rounded-xl">
        <div className="container mx-auto px-6 py-4">
          {/* Logo or Title */}
          <div className="text-center text-sky-500 font-semibold text-2xl mb-8">
            Dashboard
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <ul className="space-y-3">
              {isAdmin
                ? adminRoutes.map(({ path, name }) => (
                    <li key={name}>
                      <NavLink
                        to={path}
                        className="block px-4 py-2 rounded-lg text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      >
                        {name}
                      </NavLink>
                    </li>
                  ))
                : userRoutes.map(({ path, name }) => (
                    <li key={name}>
                      <NavLink
                        to={path}
                        className="block px-4 py-2 rounded-lg text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      >
                        {name}
                      </NavLink>
                    </li>
                  ))}
            </ul>

            <span className="h-px bg-gray-600"></span>

            <ul className="space-y-3">
              {mainRoutes.map(({ path, name }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    className="block px-4 py-2 rounded-lg text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default DashboardNav;
