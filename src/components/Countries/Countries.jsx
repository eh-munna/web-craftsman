import { useEffect, useState } from 'react';
import Country from './Country/Country';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [visited, setVisited] = useState([]);

  const handleVisited = (visitedCountries) => {
    setVisited((prevVisited) => [...prevVisited, visitedCountries]);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    })();
  }, []);

  return (
    <>
      <h1 className="my-4 text-3xl font-bold">
        Load countries using useEffect and managing them using useState
      </h1>

      <p className="text-lg my-2">
        Total number of countries: {countries.length}
      </p>

      <div className="py-3">
        <h2>Countries Visited</h2>
        <ul className="flex gap-3 py-3">
          {visited.map((country) => (
            <li key={country.cca3}>
              <img
                className="w-14 h-10 rounded-sm"
                src={country.flags?.png}
                alt={country.flags?.alt}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            onVisited={handleVisited}
          />
        ))}
      </div>
    </>
  );
}
export default Countries;
