import { useState } from 'react';

function Country({ country, onVisited }) {
  //   console.log(country);
  const {
    name: { common },
    capital,
    population,
  } = country;

  const [toggled, setToggled] = useState(false);
  const handleToggleState = () => setToggled((prev) => !prev);
  return (
    <>
      <div className="border border-gray-200 p-4 rounded-md">
        <p>Name: {common}</p>
        <p>
          {capital?.length > 1 ? 'Capitals' : 'Capital'}: {capital?.join(', ')}
        </p>
        <p>Population: {population}</p>

        <button
          onClick={() => {
            onVisited(country);
            handleToggleState();
          }}
          disabled={toggled}
          className="mt-4 rounded-md border border-gray-200 text-indigo-400 p-1.5"
        >
          Visited
        </button>
      </div>
    </>
  );
}
export default Country;
