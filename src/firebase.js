import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "chat-react-9fea2.firebaseapp.com",
    projectId: "chat-react-9fea2",
    storageBucket: "chat-react-9fea2.firebasestorage.app",
    messagingSenderId: "995094448049",
    appId: "1:995094448049:web:41f1eca9349a65f2cb5f90"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);
