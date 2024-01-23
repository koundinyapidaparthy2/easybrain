// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log({ envVal: process.env.FIREBASE_API_KEY });
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "easybrain-639ef.firebaseapp.com",
  projectId: "easybrain-639ef",
  storageBucket: "easybrain-639ef.appspot.com",
  messagingSenderId: "193916466747",
  appId: "1:193916466747:web:782a4f9901c0158faa4e1e",
  measurementId: "G-9HNFQRQ9QH",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
