import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAE1FGaB-_somzxZcG-7g50l61oNcfRBos",
  authDomain: "chatapplication-82565.firebaseapp.com",
  projectId: "chatapplication-82565",
  storageBucket: "chatapplication-82565.appspot.com",
  messagingSenderId: "90675896190",
  appId: "1:90675896190:web:66a1a24ea2b0694dbc9d2f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();