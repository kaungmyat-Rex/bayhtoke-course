"use server";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const getAppStorage = () => {
  const firebaseConfigStorage = {
    apiKey: process.env.DB_API_STORAGE,
    authDomain: "image-store-4aed4.firebaseapp.com",
    projectId: "image-store-4aed4",
    storageBucket: "image-store-4aed4.appspot.com",
    messagingSenderId: "497739550457",
    appId: "1:497739550457:web:2eae849a90fb3e838b9c28",
  };
  return new Promise((resolve) => {
    try {
      const app = initializeApp(firebaseConfigStorage, "storageApp");
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
