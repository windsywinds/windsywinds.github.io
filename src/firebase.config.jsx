// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider, FacebookAuthProvider  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { getMessaging } from "firebase/messaging";


const API_KEY = import.meta.env.VITE_API_KEY || import.meta.env.VITE_API_KEY_LOCAL
const AUTH_KEY = import.meta.env.VITE_AUTH_DOMAIN || import.meta.env.VITE_AUTH_DOMAIN_LOCAL
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID || import.meta.env.VITE_PROJECT_ID_LOCAL
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET || import.meta.env.VITE_STORAGE_BUCKET_LOCAL
const MSG_SND_ID = import.meta.env.VITE_MESSAGING_ID || import.meta.env.VITE_MESSAGING_ID_LOCAL
const APP_ID = import.meta.env.VITE_APP_ID || import.meta.env.VITE_APP_ID_LOCAL
const MEASUREMENTS_ID = import.meta.env.VITE_MEASUREMENT_ID || import.meta.env.VITE_MEASUREMENT_ID_LOCAL

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
