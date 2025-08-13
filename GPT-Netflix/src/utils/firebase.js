// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7cZH4txeZ6wjictLvlq_99J4T_VUoAu0",
  authDomain: "my-netflix-f7d96.firebaseapp.com",
  projectId: "my-netflix-f7d96",
  storageBucket: "my-netflix-f7d96.firebasestorage.app",
  messagingSenderId: "728423534806",
  appId: "1:728423534806:web:7fead20dcf7a026107b977",
  measurementId: "G-0988SCJLDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();