// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmybSioJiJdp8s6dw4yFZWZWL1OGt2Ifg",
  authDomain: "pharmacy-lv.firebaseapp.com",
  projectId: "pharmacy-lv",
  storageBucket: "pharmacy-lv.appspot.com",
  messagingSenderId: "456655066129",
  appId: "1:456655066129:web:b8fc5b024fefc95bb04db0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);

49.41;
