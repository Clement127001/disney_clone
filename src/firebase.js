import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8i1Ww_VeT0E410QMWhPTNYdqhCQThfbU",
  authDomain: "disney-clone-8ab3d.firebaseapp.com",
  projectId: "disney-clone-8ab3d",
  storageBucket: "disney-clone-8ab3d.appspot.com",
  messagingSenderId: "538761020515",
  appId: "1:538761020515:web:5016d7b74112faf0a0a456",
  measurementId: "G-SS9ZV37LN6",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
