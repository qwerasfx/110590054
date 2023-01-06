import { getDatabase } from "firebase/database"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIkTYqaWRH3t83bSNBTymDjq-5pFF8RgY",
  authDomain: "test2-9012b.firebaseapp.com",
  databaseURL: "https://test2-9012b-default-rtdb.firebaseio.com",
  projectId: "test2-9012b",
  storageBucket: "test2-9012b.appspot.com",
  messagingSenderId: "846944112968",
  appId: "1:846944112968:web:1e42c4c20c3b22ab77a37d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);