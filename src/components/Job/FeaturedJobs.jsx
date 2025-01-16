import { useEffect, useState } from 'react';
import JobCard from './JobCard/JobCard';

function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      setJobs(data.slice(0, 6));
      // setJobs(data);
    })();
  }, []);

  return (
    <>
      <div className="mt-6 space-y-4 text-center">
        <h1 className="text-3xl font-bold">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
export default FeaturedJobs;
