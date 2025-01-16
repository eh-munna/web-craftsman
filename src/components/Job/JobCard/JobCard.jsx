import { NavLink } from 'react-router';

function JobCard({ job }) {
  const {
    id,
    title,
    company,
    description,
    responsibilities,
    requirements,
    salary,
    contact,
  } = job;
  return (
    <>
      <div className="max-w-md bg-gray-800 text-white p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-sky-500 mb-2">{title}</h2>
        <p className="text-sm text-gray-400 mb-2">{company}</p>
        <p className="text-gray-300 mb-4">{description}</p>

        <NavLink to={`/job/${id}`}>
          <button className="inline-block bg-sky-500 text-gray-900 border-2 border-sky-500 hover:bg-gray-700 hover:text-white hover:border-gray-700 py-2 px-4 rounded-full transition duration-200">
            See Details
          </button>
        </NavLink>
      </div>
    </>
  );
}
export default JobCard;
