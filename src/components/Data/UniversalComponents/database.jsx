// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfigDb = {
  apiKey: "AIzaSyA5N0jfTFGReLrBOr0KFxylEPdm8DUbLqc",
  authDomain: "portfoliolab-login.firebaseapp.com",
  databaseURL: "https://portfoliolab-login.firebaseio.com",
  projectId: "portfoliolab-login",
  storageBucket: "portfoliolab-login.appspot.com",
  messagingSenderId: "478109652132",
  appId: "1:478109652132:web:a81cb38e5b3302654d4231",
  measurementId: "G-PN0YBHZDX4",
};

// Initialize Firebase

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfigDb);

export default db;
