import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBs4Rpc_6Iaf3uDc7LiOjk3nOXjt4T9jl0",
  authDomain: "linkedin-replica-97318.firebaseapp.com",
  projectId: "linkedin-replica-97318",
  storageBucket: "linkedin-replica-97318.appspot.com",
  messagingSenderId: "896639477468",
  appId: "1:896639477468:web:be559156e9558be1be7619",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
