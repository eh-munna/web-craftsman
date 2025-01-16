import { useLoaderData } from 'react-router';
import useStoreJob from '../../../hooks/useStoreJob';

function JobDetails() {
  const job = useLoaderData();
  // const [store, setStore] = useState([]);

  const { getFromStore, saveToStore } = useStoreJob();
  // useEffect(() => {
  //   const storedJobs = getFromStore();
  //   setStore(storedJobs);
  // }, [store]);

  const {
    id,
    title,
    company,
    description,
    responsibilities,
    requirements,
    salary,
    contact,
    status,
  } = job;

  const handleStoreJob = (jobId) => {
    // setStore([...store, jobId]);
    saveToStore(jobId);
    const storedJobIds = getFromStore();
    for (const storedJobId of storedJobIds) {
      if (storedJobId === jobId) {
        alert(`"${title}" already is in your list.`);
        return;
      }
    }
    alert(`"${title}" has been saved to your list.`);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Job Description and Responsibilities */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-sky-500">{title}</h1>
            {/* Status Badge */}
            <span
              className={`inline-block px-3 py-1 text-sm font-semibold rounded-md ${
                status === 'remote'
                  ? 'bg-green-500 text-gray-900'
                  : 'bg-yellow-500 text-gray-900'
              }`}
            >
              {status === 'remote' ? 'Remote' : 'On-site'}
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-2">{company}</p>
          <p className="text-lg text-gray-300">{description}</p>
          <h2 className="text-2xl font-semibold text-sky-500">
            Responsibilities:
          </h2>
          <ul className="list-disc pl-5 text-gray-300">
            {responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold text-sky-500">Requirements:</h2>
          <ul className="list-disc pl-5 text-gray-300">
            {requirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
        </div>

        {/* Right Section - Apply Now Card */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">Apply Now</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Salary</h3>
            <p className="text-gray-300">{salary}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-gray-300">{contact}</p>
          </div>
          <button
            onClick={() => handleStoreJob(id)}
            className="inline-block bg-sky-500 text-gray-900 border-2 border-sky-500 hover:bg-gray-700 hover:text-white hover:border-gray-700 py-2 px-4 rounded-full transition duration-200"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
export default JobDetails;
