// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlHWdgF5_XJx2u5uTZ0YmFflNlCiuZWSo",
  authDomain: "timetablenative.firebaseapp.com",
  projectId: "timetablenative",
  storageBucket: "timetablenative.appspot.com",
  messagingSenderId: "393693491052",
  appId: "1:393693491052:web:77c76488ad8bfe60130d49"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

const auth = getAuth(firebase_app);
export { firebase_app, auth};