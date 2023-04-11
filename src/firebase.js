import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB2xqz_LRK_hfmnqBwjKyfvBru_rnTGh_8",
    authDomain: "react-firebase-auth-8ac35.firebaseapp.com",
    projectId: "react-firebase-auth-8ac35",
    storageBucket: "react-firebase-auth-8ac35.appspot.com",
    messagingSenderId: "564460057440",
    appId: "1:564460057440:web:ce564237ed327ecfd0a405",
    measurementId: "G-XKD3Y3KXX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth }