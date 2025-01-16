import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import useStoreJob from '../../../hooks/useStoreJob';

function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const jobs = useLoaderData();

  useEffect(() => {
    const storedJobIds = useStoreJob().getFromStore();
    const savedJobs = [];

    if (storedJobIds.length) {
      for (const job of jobs) {
        if (storedJobIds.includes(job.id)) {
          savedJobs.push(job);
        }
      }
    }
    setAppliedJobs(savedJobs);
  }, []);

  if (!appliedJobs || appliedJobs.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-gray-200">
        <p className="text-lg">You haven't applied to any jobs yet.</p>
      </div>
    );
  }
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-sky-500 mb-6">Applied Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appliedJobs.map((job) => (
          <div
            key={job.id}
            className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-sky-500 mb-2">
              {job.title}
            </h2>
            <p className="text-sm text-gray-400 mb-2">{job.company}</p>
            <p className="text-gray-300 mb-4">
              {job.description.substring(0, 100)}...
            </p>
            <div className="flex justify-between items-center">
              <span
                className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                  job.status === 'remote'
                    ? 'bg-green-500 text-gray-900'
                    : 'bg-yellow-500 text-gray-900'
                }`}
              >
                {job.status === 'remote' ? 'Remote' : 'On-site'}
              </span>
              <Link
                to={`/job/${job.id}`}
                className="inline-block bg-sky-500 text-gray-900 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-full transition duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AppliedJobs;
