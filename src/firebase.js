import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQ1An7ycHtxjierCs5KMbO4NLdB1IY7kg",
  authDomain: "build-netflix-fc5c0.firebaseapp.com",
  projectId: "build-netflix-fc5c0",
  storageBucket: "build-netflix-fc5c0.appspot.com",
  messagingSenderId: "779940608145",
  appId: "1:779940608145:web:7ce5b1d9fa86ec8ee2e730",
  measurementId: "G-H6M1YECZQV",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth };
export default db;
