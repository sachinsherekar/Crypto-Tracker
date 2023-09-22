import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCF5ChCQdXZXgjlwLa5Y5sk-BUGeGAB038",
    authDomain: "cryptotracker-525b2.firebaseapp.com",
    projectId: "cryptotracker-525b2",
    storageBucket: "cryptotracker-525b2.appspot.com",
    messagingSenderId: "913395832075",
    appId: "1:913395832075:web:0137d64a6c23b924b07e0e",
    measurementId: "G-DN5HM2C1KZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db,auth};