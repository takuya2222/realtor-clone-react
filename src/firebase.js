// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmAn1nVleeHuVyTO8vIwyOUS-5O0sQyUU",
  authDomain: "realtor-clone-react-1139b.firebaseapp.com",
  projectId: "realtor-clone-react-1139b",
  storageBucket: "realtor-clone-react-1139b.appspot.com",
  messagingSenderId: "405697812076",
  appId: "1:405697812076:web:b9a0ed419f8b17229fea49",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
