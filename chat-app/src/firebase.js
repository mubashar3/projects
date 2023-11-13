import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCpxm88OrELSl_bVePJ3VmXlEpb9WSTJio",
    authDomain: "chichat-fd2e2.firebaseapp.com",
    projectId: "chichat-fd2e2",
    storageBucket: "chichat-fd2e2.appspot.com",
    messagingSenderId: "939018409091",
    appId: "1:939018409091:web:2aacbcabb1acf32b0837b6",
    measurementId: "G-YFS43YLVNV"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, app, db, storage, provider };