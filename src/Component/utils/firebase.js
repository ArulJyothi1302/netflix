// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD1dOh0_NCSOpbcFzufVgwUNtVY3RgCuh0",
  authDomain: "netflixgpt-1a5f5.firebaseapp.com",
  projectId: "netflixgpt-1a5f5",
  storageBucket: "netflixgpt-1a5f5.appspot.com",
  messagingSenderId: "888757202398",
  appId: "1:888757202398:web:6230272103684ba863814f",
  measurementId: "G-VDML3JC9B6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
