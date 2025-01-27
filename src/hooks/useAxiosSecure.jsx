import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from './useAuth';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

function useAxiosSecure() {
  const { userSignOut, setUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (
          (error.response && error.response.status === 403) ||
          error.response.status === 401
        ) {
          // Unauthorized
         userSignOut();
          setUser(null);
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [userSignOut, setUser, navigate]);
  return axiosSecure;
}
export default useAxiosSecure;
