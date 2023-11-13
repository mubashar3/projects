import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDAAOHJpHcRUkzccJiMeu2NaN2M88uweCQ",
  authDomain: "impulse-1ffc9.firebaseapp.com",
  projectId: "impulse-1ffc9",
  storageBucket: "impulse-1ffc9.appspot.com",
  messagingSenderId: "763512177046",
  appId: "1:763512177046:web:88b80cc7e6ba3c60601db7"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, app, db, storage, provider };