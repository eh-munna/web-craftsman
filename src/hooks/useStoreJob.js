const useStoreJob = () => {
  const getFromStore = () => {
    const job = localStorage.getItem('jobs');
    console.log(job);
    if (job) {
      return JSON.parse(job);
    }
    return [];
  };

  const setToStore = (jobs) => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  };

  const saveToStore = (jobId) => {
    const jobs = getFromStore();
    if (!jobs.includes(jobId)) {
      jobs.push(jobId);
      setToStore(jobs);
    }
  };
  return { getFromStore, saveToStore };
};
export default useStoreJob;

// export const getFromStore = () => {
//   const job = localStorage.getItem('jobs');
//   console.log(job);
//   if (job) {
//     return JSON.parse(job);
//   }
//   return [];
// };

// export const setToStore = (jobs) => {
//   localStorage.setItem('jobs', JSON.stringify(jobs));
// };

// export const saveToStore = (jobId) => {
//   const jobs = getFromStore();
//   if (!jobs.includes(jobId)) {
//     jobs.push(jobId);
//     setToStore(jobs);
//   }
// };
