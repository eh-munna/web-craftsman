import { Link } from 'react-router';
const routePaths = [
  {
    id: 1,
    path: '/',
    name: 'Home',
  },
  {
    id: 2,
    path: '/products',
    name: 'Products',
  },
  {
    id: 3,
    path: '/contact',
    name: 'Contact',
  },
];

function Navbar() {
  return (
    <>
      <ul className="flex items-center justify-center gap-3 my-6">
        {routePaths.map((route) => (
          <li key={route.id}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Navbar;
