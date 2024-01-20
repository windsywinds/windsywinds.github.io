// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider, FacebookAuthProvider  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { getMessaging } from "firebase/messaging";


const API_KEY = import.meta.env.VITE_API_KEY
const AUTH_KEY = import.meta.env.VITE_AUTH_DOMAIN
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET
const MSG_SND_ID = import.meta.env.VITE_MESSAGING_ID
const APP_ID = import.meta.env.VITE_APP_ID
const MEASUREMENTS_ID = import.meta.env.VITE_MEASUREMENT_ID

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_KEY,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MSG_SND_ID,
    appId: APP_ID,
    measurementId: MEASUREMENTS_ID
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const fbProvider = new FacebookAuthProvider();
export const db = getFirestore(app);
