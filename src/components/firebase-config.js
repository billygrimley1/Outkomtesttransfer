// firebase-config.js

// 1. Import the functions you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// If you plan to use Firestore as your database:
import { getFirestore } from "firebase/firestore";

// 2. Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpstrAqMEt8vtK1oUjZQd-ciO8t2bvnYU",
  authDomain: "outkomtest-ba930.firebaseapp.com",
  projectId: "outkomtest-ba930",
  storageBucket: "outkomtest-ba930.firebasestorage.app", // from your console
  messagingSenderId: "356680297231",
  appId: "1:356680297231:web:538f46c8e4e9ae10086c7a",
  measurementId: "G-Y3QX5VW9T5",
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 4. (Optional) Export Firestore if you need database features
export const db = getFirestore(app);

// 5. (Optional) Export analytics if you need it in other parts of your app
export { analytics };
