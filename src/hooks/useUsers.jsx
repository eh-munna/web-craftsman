import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

function useUsers() {
  const axiosSecure = useAxiosSecure();
  const { data = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      try {
        const { data } = await axiosSecure.get('/users');
        return data;
      } catch (error) {
        console.error('Error fetching users:', error);
        throw error; // Throw other errors to React Query
      }
    },
  });

  return [data, refetch];
}
export default useUsers;
