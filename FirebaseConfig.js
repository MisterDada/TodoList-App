// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABib5WhvfFYvwkFWXZyGKZp8fVfhD0B3c",
  authDomain: "pigeon-b48d4.firebaseapp.com",
  projectId: "pigeon-b48d4",
  storageBucket: "pigeon-b48d4.firebasestorage.app",
  messagingSenderId: "490981036428",
  appId: "1:490981036428:web:0dbbf1cd1e2b5eed2786a9",
  measurementId: "G-S40KR3VY17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);