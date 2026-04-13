import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-smart-interview-platform.firebaseapp.com",
  projectId:  "ai-smart-interview-platform",
  storageBucket:  "ai-smart-interview-platform.firebasestorage.app",
  messagingSenderId: "446186379389",
  appId: "1:446186379389:web:879ca372d646a35c5cb914"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}