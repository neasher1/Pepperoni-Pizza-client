// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-_ECm7ZiD5LK9kQVlzWitccJ42avXwRY",
    authDomain: "pepperoni-client.firebaseapp.com",
    projectId: "pepperoni-client",
    storageBucket: "pepperoni-client.appspot.com",
    messagingSenderId: "397186354646",
    appId: "1:397186354646:web:a309aec26f267ab4e9a877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;