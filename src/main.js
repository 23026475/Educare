// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import './assets/main.css';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration (replace with your own config)
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
initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth();

const app = createApp(App);
app.use(router);
app.provide('auth', auth); // Provides Firebase auth throughout the app if needed
app.mount('#app');

