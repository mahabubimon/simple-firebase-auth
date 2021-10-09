import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut
} from "@firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => setUser(result.user))
      .catch(error => setError(error.message));
  };

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then(result => setUser(result.user))
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser({});
      }
    });
  }, [auth]);

  return {
    user,
    error,
    handleGoogleSignIn,
    handleGitHubSignIn,
    handleSignOut,
  };
};

export default useFirebase;
