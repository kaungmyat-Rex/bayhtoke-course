"use server";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const getAppStorage = () => {
  const firebaseConfig = {
    // apiKey: "AIzaSyANXe1K4howcBV-WF_yni_uTRqFYjnKKYM",
    // authDomain: "image-store-4aed4.firebaseapp.com",
    // projectId: "image-store-4aed4",
    // storageBucket: "image-store-4aed4.appspot.com",
    // messagingSenderId: "497739550457",
    // appId: "1:497739550457:web:2eae849a90fb3e838b9c28",
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
      const storage = getStorage(app);
      resolve(storage);
    } catch (error) {
      resolve(error);
    }
  });
};

export default getAppStorage;

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);
