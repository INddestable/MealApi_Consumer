// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhMY1QUy4jSCJ7lsxF36iXgD146PUyGuc",
  authDomain: "mealsapi-da113.firebaseapp.com",
  projectId: "mealsapi-da113",
  storageBucket: "mealsapi-da113.firebasestorage.app",
  messagingSenderId: "1049467431616",
  appId: "1:1049467431616:web:ec5d89d70738ee90211b25",
  measurementId: "G-N5L79TZB8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);