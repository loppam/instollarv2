// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCoOep3zdkeosVGtNGP3Tl_pfyGOKMLH5Q",
  authDomain: "instollar.firebaseapp.com",
  projectId: "instollar",
  storageBucket: "instollar.appspot.com",
  messagingSenderId: "532937245424",
  appId: "1:532937245424:web:be1ebad299babf22c13835",
  measurementId: "G-3QF033HMZD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {
  db,
  auth,
}
