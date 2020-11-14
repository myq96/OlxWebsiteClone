import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyArcDtA9ib9ISlY4Bqj0U_MdiAJKoLHZCU",
  authDomain: "olxapplication-f06a3.firebaseapp.com",
  databaseURL: "https://olxapplication-f06a3.firebaseio.com",
  projectId: "olxapplication-f06a3",
  storageBucket: "olxapplication-f06a3.appspot.com",
  messagingSenderId: "155901074530",
  appId: "1:155901074530:web:4ece24d65d62ae736ec53b",
  measurementId: "G-YX6M3M032E",
};

// Initialize Firebase
var Db = firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
var facebookProvider = new firebase.auth.FacebookAuthProvider();
export  {Db, storage, facebookProvider, firebase as default};
// export default fireDb.database().ref();
