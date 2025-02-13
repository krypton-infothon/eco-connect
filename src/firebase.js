// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqF1wuTjcIEoFTTgOHVJ03HAQZhyVIZFU",
    authDomain: "ggoapp-42879.firebaseapp.com",
    projectId: "ggoapp-42879",
    storageBucket: "ggoapp-42879.firebasestorage.app",
    messagingSenderId: "460662388851",
    appId: "1:460662388851:web:548e83b7825a1931fa5206",
    measurementId: "G-Q9YB9M13GC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }
