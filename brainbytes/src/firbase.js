import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyABbFjd2_ClAPqXa8P_4uFCEYLTi_Rz8PE",
    authDomain: "brainbytes-29092.firebaseapp.com",
    projectId: "brainbytes-29092",
    storageBucket: "brainbytes-29092.appspot.com",
    messagingSenderId: "622997962579",
    appId: "1:622997962579:web:9abd3e232c9d937979eba6"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, app, db, storage, provider };