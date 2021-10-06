import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import "./App.css";
import initializeAuthentication from "./Firebase/firebase.initialize";

initializeAuthentication();

const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState({});
  const { name, email, image } = user;
  const handleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
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

  return (
    <div className="App">
      <button onClick={handleSignIn}>Google Sign In</button>
      <br />
      {
        email && <div>
          <h2>Welcome {name}</h2>
          <h2>Your Email: {email}</h2>
          <h3>Your Picture:</h3>
          <img src={image} alt="" />
        </div>
      }
    </div>
  );
}

export default App;
