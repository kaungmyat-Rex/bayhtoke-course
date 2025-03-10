"use server";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const getApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBiSV51i8JmYA1STmOuc-SwM0bVZKZE2Yk",
    authDomain: "bayhtokecourse-7d91a.firebaseapp.com",
    projectId: "bayhtokecourse-7d91a",
    storageBucket: "bayhtokecourse-7d91a.firebasestorage.app",
    messagingSenderId: "774219904898",
    appId: "1:774219904898:web:8670a619add63edf55019b",
    measurementId: "G-6X3C4CC6HC",
  };

  return new Promise((resolve) => {
    try {
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      resolve(db);
    } catch (error) {
      resolve(error);
    }
  });
};

export default getApp;
