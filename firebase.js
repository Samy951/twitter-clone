// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyjdooEjNwkQWhnGHSAZGB6-TnXwF4uJw",
    authDomain: "twitter-clone-b747d.firebaseapp.com",
    projectId: "twitter-clone-b747d",
    storageBucket: "twitter-clone-b747d.appspot.com",
    messagingSenderId: "683860337847",
    appId: "1:683860337847:web:4285ca043e426789ac1932"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };