// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpstrAqMEt8vtK1oUjZQd-ciO8t2bvnYU",
  authDomain: "outkomtest-ba930.firebaseapp.com",
  projectId: "outkomtest-ba930",
  storageBucket: "outkomtest-ba930.firebasestorage.app",
  messagingSenderId: "356680297231",
  appId: "1:356680297231:web:538f46c8e4e9ae10086c7a",
  measurementId: "G-Y3QX5VW9T5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
