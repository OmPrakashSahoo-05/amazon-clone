import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkGbJArGSIMVecH5GKRz5XAHGyfc_D0iY",
    authDomain: "clone-68c4c.firebaseapp.com",
    projectId: "clone-68c4c",
    storageBucket: "clone-68c4c.appspot.com",
    messagingSenderId: "653988489624",
    appId: "1:653988489624:web:bae252e89459603af0a3ed",
    measurementId: "G-DJZ6YH80RW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };