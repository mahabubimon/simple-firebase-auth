import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const firebaseContext = useFirebase();
  return (
    <AuthContext.Provider value={firebaseContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
