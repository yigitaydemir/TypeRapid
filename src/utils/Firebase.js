import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAfADHe66ZkJLCco6VP9udkcDwSYSbpqZQ",
  authDomain: "typerapid-3e29c.firebaseapp.com",
  projectId: "typerapid-3e29c",
  storageBucket: "typerapid-3e29c.appspot.com",
  messagingSenderId: "1054202358839",
  appId: "1:1054202358839:web:eedec039c5c4fc0fa3a3b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)