import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import "./App.css";
import initializeAuthentication from "./Firebase/firebase.initialize";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const gitHubProvider = new GithubAuthProvider();

function App() {
  const [user, setUser] = useState({});
  const { name, email, image } = user;
  const auth = getAuth();
  const googleHandleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const { displayName, email, photoURL } = result.user;
      const loggedUser = {
        name: displayName,
        email,
        image: photoURL,
      };
      setUser(loggedUser);
    })
    .catch((error) => {
      console.log(error.message);
    })
  };

  const gitHubHandleSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
    .then((result) => {
      const { displayName, email, photoURL } = result.user;
      const loggedUser = {
        name: displayName,
        email,
        image: photoURL,
      };
      setUser(loggedUser);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
    .then(()=> {
      setUser({});
    })
  }

  return (
    <div className="App">
      {
        !name ?
          <div>
            <button onClick={googleHandleSignIn}>Google Sign In</button> <br /> <br />
            <button onClick={gitHubHandleSignIn}>GitHub Sign In</button>
          </div> :
          <button onClick={handleSignOut}>Sign Out</button>
      }
      {
        name && <div>
          <h2>Welcome {name}</h2>
          <h2>Your Email: {email}</h2>
          <h3>Your Picture:</h3>
          <img src={image} alt="" />
        </div>
      }
      <br />
      <br />
    </div>
  );
}

export default App;
