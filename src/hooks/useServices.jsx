import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

function useServices() {
  const axiosPublic = useAxiosPublic();
  const { data: services, refetch } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      try {
        const { data } = await axiosPublic.get(`/services`);
        return data.data;
      } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
      }
    },
  });
  return [services, refetch];
}
export default useServices;

// queryKey: ['services'],
// queryFn: async () => {
//     try {
//         const response = await fetch('https://api.example.com/services');
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching services:', error);
//         throw error;
//     }
// },
// // cacheTime: 60 * 1000, // 1 minute cache
