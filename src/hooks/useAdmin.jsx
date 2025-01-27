import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

function useAdmin() {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: ['admins', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      try {
        if (!user?.email) return [];
        const { data } = await axiosSecure.get(`/admins?email=${user?.email}`);
        return data?.data?.isAdmin;
      } catch (error) {
        console.error('Error fetching admins:', error);
        throw error; // Throw other errors to React Query
      }
    },
  });
  return [isAdmin, isAdminLoading];
}
export default useAdmin;
