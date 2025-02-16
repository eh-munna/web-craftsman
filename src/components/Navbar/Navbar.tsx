import Logo from '@/assets/Logo';
import { Link } from 'react-router-dom';
import { ModeToggle } from '../ui/mode-toggle';

export default function Navbar() {
  const navLinks = [
    {
      path: '/',
      element: 'Home',
    },
    {
      path: '/about',
      element: 'About',
    },
    {
      path: '/tasks',
      element: 'Tasks',
    },
  ];

  return (
    <nav className="bg-gray-900 font-montserrat p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="http://">
            <Logo />
          </a>
          <span className="text-xl font-bold">My Tasker</span>
        </div>

        <div>
          <ul className="flex gap-2">
            {navLinks.map(({ path, element }, index) => (
              <li key={index} className="mx-2">
                <Link to={path} className="no-underline hover:text-green-400">
                  {element}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>
            <span>
              <ModeToggle />
            </span>
          </p>
        </div>
      </div>
    </nav>
  );
}
