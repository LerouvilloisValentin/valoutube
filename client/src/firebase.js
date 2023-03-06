import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCLnKtoqMSNff36O44G7Axp0Ye4jXpGam0",
  authDomain: "video-c2c23.firebaseapp.com",
  projectId: "video-c2c23",
  storageBucket: "video-c2c23.appspot.com",
  messagingSenderId: "1029413895615",
  appId: "1:1029413895615:web:1aa6b24c834f6da2bf350a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;