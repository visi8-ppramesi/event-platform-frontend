import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from 'firebase/auth';import dotenv from 'dotenv'

const env = dotenv.config().parsed;

const firebaseConfig = {
    apiKey: env.API_KEY,
    authDomain: env.AUTH_DOMAIN,
    projectId: env.PROJECT_ID,
    storageBucket: env.STORAGE_BUCKET,
    messagingSenderId: env.MESSAGING_SENDER_ID,
    appId: env.APP_ID,
    measurementId: env.MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export default {app, db, auth, analytics};