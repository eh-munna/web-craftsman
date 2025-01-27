import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { createContext, useEffect, useState } from 'react';
import auth from '../authentication/firebase.authentication';
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  // const location = useLocation();
  // const navigate = useNavigate();
  // const from = location.state?.from?.pathname || '/';

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const createGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const createGithubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       setUser(currentUser || null);
  //       setLoading(false);
  //     } else {
  //       setUser(null);
  //       setLoading(false); // Redirect to login page on sign-out
  //     }
  //   });
  //   return () => {
  //     unsubscribe(); // Clean up listener on unmount
  //     // setLoading(false);
  //   };
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);

      if (currentUser) {
        const userInfo = { email: currentUser?.email };
        try {
          const { data } = await axiosPublic.post(
            `/users/auth-login`,
            userInfo,
            {
              withCredentials: true,
            }
          );
          if (data.success) {
            // Redirect logic if needed (e.g., navigate("/"))
          }
        } catch (error) {
          console.error('Error during auth-login:', error.message);
        }
      } else {
        try {
          const { data } = await axiosPublic.post(
            `/users/auth-logout`,
            {},
            { withCredentials: true }
          );
          if (data.success) {
            // Redirect logic on successful logout
          }
        } catch (error) {
          console.error('Error during auth-logout:', error.message);
        }
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    createUser,
    userSignOut,
    createGoogleLogin,
    createGithubLogin,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
export default AuthProvider;
