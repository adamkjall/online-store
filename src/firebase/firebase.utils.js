import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAeKWx1J2WU0lFQNKfPQ-zMaLTBhp3nT6E",
  authDomain: "crwn-db-856fe.firebaseapp.com",
  databaseURL: "https://crwn-db-856fe.firebaseio.com",
  projectId: "crwn-db-856fe",
  storageBucket: "crwn-db-856fe.appspot.com",
  messagingSenderId: "188395345282",
  appId: "1:188395345282:web:21f4f7259ea4eff30dab9b",
  measurementId: "G-K26QET2PMT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;