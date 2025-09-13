// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace with your app's Firebase project configuration
// You can find this in the Firebase console under Project settings -> General
const firebaseConfig = {
  apiKey: "AIzaSyAr8OcUKxmjbCsy3dWpgQwfDbe0ZKqPtIA",
  authDomain: "dhartirakshak-9e46a.firebaseapp.com",
  projectId: "dhartirakshak-9e46a",
  storageBucket: "dhartirakshak-9e46a.firebasestorage.app",
  messagingSenderId: "551310236937",
  appId: "1:551310236937:web:11fefa87479636e162c7d8",
  measurementId: "G-7JHFK8XF7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);