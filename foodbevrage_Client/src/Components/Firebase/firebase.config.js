// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBM9Nx4d0wUek0c1BLFRBkA6OT7tYOqw0",
  authDomain: "foodiebevrage.firebaseapp.com",
  projectId: "foodiebevrage",
  storageBucket: "foodiebevrage.appspot.com",
  messagingSenderId: "738151355228",
  appId: "1:738151355228:web:047fb4b82af1dbb64fa799"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;