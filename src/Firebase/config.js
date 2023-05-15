import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPbYUtrFMa7WXPshWaxs4n_2Ed25e09jU",
    authDomain: "olx-web-72f7c.firebaseapp.com",
    projectId: "olx-web-72f7c",
    storageBucket: "olx-web-72f7c.appspot.com",
    messagingSenderId: "384258009952",
    appId: "1:384258009952:web:bd1aa05cdfa2bad35ccc05",
    measurementId: "G-2XDVRYCH54"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const auth = getAuth(app);
  const storage = getStorage(app);
  export {db,auth,storage}