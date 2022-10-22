import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);

  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);

    return signOut(auth);
  };

  const updateuserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const verifyUserEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser===null || currentUser.emailVerified) {
        setuser(currentUser);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const userInfo = {
    user,
    providerLogin,
    logOut,
    createUser,
    signIn,
    loading,
    updateuserProfile,
    verifyUserEmail,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
