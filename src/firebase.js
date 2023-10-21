// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClL79qiuM9AW7WIAWH56JlUyOwTO104C0",
  authDomain: "contact-590a5f.firebaseapp.com",
  projectId: "contact-590a5f",
  storageBucket: "contact-590a5f.appspot.com",
  messagingSenderId: "189920703225",
  appId: "1:189920703225:web:67c8bc77771a2bccd66828",
  measurementId: "G-L5GDBBCKMP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAnalytics(app);
const db = getFirestore(app);

export { auth, db };
