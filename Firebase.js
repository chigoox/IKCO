// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM0BppEpwF09WP2g-Pnyd6-tVV59ZDbkA",
  authDomain: "ikco-cabinets.firebaseapp.com",
  projectId: "ikco-cabinets",
  storageBucket: "ikco-cabinets.appspot.com",
  messagingSenderId: "375752859945",
  appId: "1:375752859945:web:107fd5e40b535f78a11738",
  measurementId: "G-MRXXRPN9Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DATABASE = getFirestore(app);

export default app
export { DATABASE }
