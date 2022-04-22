import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import {
  browserLocalPersistence,
  getAuth, 
  setPersistence
} from "firebase/auth";
import { getStorage } from 'firebase/storage'
import { getPerformance } from "firebase/performance";

// import dotenv from 'dotenv';

// const env = dotenv.config().parsed;

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const storage = getStorage(app)
const performance = getPerformance(app)
const geofire = require('geofire-common')

setPersistence(auth, browserLocalPersistence)

export default {app, db, auth, storage, analytics, performance, geofire};