import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB66B44Vhfa4PufK0LXyHA-zsCxCjbpTAg",
  authDomain: "shopawecstrike.firebaseapp.com",
  projectId: "shopawecstrike",
  storageBucket: "shopawecstrike.appspot.com",
  messagingSenderId: "899624411080",
  appId: "1:899624411080:web:1a5990313ca931972b2afd",
  measurementId: "G-GMLTZMGMXR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
