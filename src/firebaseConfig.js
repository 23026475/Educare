// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxUDZp5XUutOnRhvOYkEVuIKI6XYX3czo",
  authDomain: "educare-93be6.firebaseapp.com",
  databaseURL: "https://educare-93be6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "educare-93be6",
  storageBucket: "educare-93be6.firebasestorage.app",
  messagingSenderId: "955756150123",
  appId: "1:955756150123:web:a9309231982e6cbc10602e",
  measurementId: "G-V2B38ETPD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

