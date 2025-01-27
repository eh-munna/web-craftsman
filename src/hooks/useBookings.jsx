import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

function useBookings() {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data = [], refetch } = useQuery({
    queryKey: ['bookings', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      if (!user?.email) return [];
      try {
        const { data } = await axiosSecure.get(
          `/bookings?email=${user?.email}`
        );
        return data;
      } catch (error) {
        if (error.response?.status === 404) {
          console.warn('No bookings found, returning empty array.');
          return []; // Return empty array for 404
        }
        console.error('Error fetching bookings:', error);
        throw error; // Throw other errors to React Query
      }
    },
  });
  return [data, refetch];
}

export default useBookings;

// ***------------------------------------***

// import { useQuery } from '@tanstack/react-query';
// import useAuth from './useAuth';
// import useAxiosSecure from './useAxiosSecure';

// function useBookings() {
//   const { user, loading } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const { data = [], refetch } = useQuery({
//     queryKey: ['bookings', user?.email],
//     enabled: !loading && !!user?.email, // Only fetch if user has an email
//     queryFn: async () => {
//       if (!user?.email) return []; // Avoid query if no email is available
//       const { data } = await axiosSecure.get(
//         `/bookings/?email=${user?.email}`,
//         {
//           withCredentials: true,
//         }
//       );
//       return data || []; // Return empty array if no bookings exist
//     },
//   });
//   return [data, refetch];
// }
// export default useBookings;

// ***------------------------------------***
