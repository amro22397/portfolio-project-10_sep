// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb9MpxEx7QgqOuMxHOTnmVKEPMmH5Yis4",
  authDomain: "portfolio-project-app-9a845.firebaseapp.com",
  projectId: "portfolio-project-app-9a845",
  storageBucket: "portfolio-project-app-9a845.appspot.com",
  messagingSenderId: "744747830856",
  appId: "1:744747830856:web:af37a8e8344f530f6fd27d",
  measurementId: "G-LL3K549P75"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);