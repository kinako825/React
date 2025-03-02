import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEc5p-Gi6Txq3DaYMfHaT6jTyhkjThogg",
    authDomain: "chat-app-ae2c5.firebaseapp.com",
    projectId: "chat-app-ae2c5",
    storageBucket: "chat-app-ae2c5.firebasestorage.app",
    messagingSenderId: "466308101874",
    appId: "1:466308101874:web:f8194e75e2838ba32d426b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };