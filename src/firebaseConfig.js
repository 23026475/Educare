import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Replace with your own Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyCxUDZp5XUutOnRhvOYkEVuIKI6XYX3czo",
  authDomain: "educare-93be6.firebaseapp.com",
  projectId: "educare-93be6",
  storageBucket: "educare-93be6.firebasestorage.app",
  messagingSenderId: "955756150123",
  appId: "1:955756150123:web:0c4aa11f6cdef00510602e",
  measurementId: "G-62HSRQDHVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };

