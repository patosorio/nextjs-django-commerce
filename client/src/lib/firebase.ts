// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FIREBASE_CONFIG } from "../config/constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);
// const analytics = getAnalytics(app);

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from './lib/firebase';

// const userCredential = await signInWithEmailAndPassword(auth, email, password);
// const token = await userCredential.user.getIdToken(); // Send this to Flask

// Firebase hosting:

// firebase login
// firebase init
// firebase deploy
