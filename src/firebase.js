// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABjaUoVPnm7JL_FcZCe2mGGEz1E7lRuMU",
  authDomain: "contact-53e58.firebaseapp.com",
  projectId: "contact-53e58",
  storageBucket: "contact-53e58.appspot.com",
  messagingSenderId: "189892616650",
  appId: "1:189892616650:web:6a677f5d8ec98a32096f33",
  measurementId: "G-SFNY2GFK58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAnalytics(app);
const db = getFirestore(app);

export { auth, db };
