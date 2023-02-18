import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBhCBzYWx7-B3YTCNScQeiSW7ODIOemXWI",
    authDomain: "invetory-management-system.firebaseapp.com",
    projectId: "invetory-management-system",
    storageBucket: "invetory-management-system.appspot.com",
    messagingSenderId: "1052852901894",
    appId: "1:1052852901894:web:6da498e4d2036ff5a48b87",
    measurementId: "G-G8BPHQ7C9X"
  };
  

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();