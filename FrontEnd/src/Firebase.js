// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVcAb3nFZXZif3afWUZqWy5ZPBcBfWsEQ",
  authDomain: "market-place-778b7.firebaseapp.com",
  projectId: "market-place-778b7",
  storageBucket: "market-place-778b7.firebasestorage.app",
  messagingSenderId: "737880274775",
  appId: "1:737880274775:web:d4daf5ede116e68d3ab012",
  measurementId: "G-K06VFW5H8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();