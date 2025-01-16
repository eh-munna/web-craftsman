const useJobLoader = async ({ params }) => {
  const response = await fetch(`/data.json`);
  const data = await response.json();

  const job = data.find((job) => job.id === parseInt(params.jobId));
  if (!job) {
    throw new Error('Job not found!');
  }
  return job;
};
export default useJobLoader;
