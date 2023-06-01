// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEkE4DGI15yNnlkozo_A2ZOLOUwzeJphM",
  authDomain: "zeus-solutions.firebaseapp.com",
  databaseURL: "https://zeus-solutions-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "zeus-solutions",
  storageBucket: "zeus-solutions.appspot.com",
  messagingSenderId: "291720212725",
  appId: "1:291720212725:web:edfb237f4c086889df55bc",
  measurementId: "G-QS9YCMBJNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);