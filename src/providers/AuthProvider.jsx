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

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
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
