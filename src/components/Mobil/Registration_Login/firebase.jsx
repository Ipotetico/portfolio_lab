// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA5N0jfTFGReLrBOr0KFxylEPdm8DUbLqc",
  authDomain: "portfoliolab-login.firebaseapp.com",
  databaseURL: "https://portfoliolab-login.firebaseio.com",
  projectId: "portfoliolab-login",
  storageBucket: "portfoliolab-login.appspot.com",
  messagingSenderId: "478109652132",
  appId: "1:478109652132:web:8aba2395ad381eca4d4231",
  measurementId: "G-72ZES5LY7Z",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
