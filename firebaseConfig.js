// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

const { apiKey } = Constants.manifest2.extra;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "gradebook-4a87b.firebaseapp.com",
  projectId: "gradebook-4a87b",
  storageBucket: "gradebook-4a87b.appspot.com",
  messagingSenderId: "230667295207",
  appId: "1:230667295207:web:4fa29fb0d194be6d4a4542",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export default app;
