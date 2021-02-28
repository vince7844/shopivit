import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDQjWsmGN8isblXy3UdZ4CJzyZVYnkU-v0",
  authDomain: "shopivit.firebaseapp.com",
  projectId: "shopivit",
  storageBucket: "shopivit.appspot.com",
  messagingSenderId: "411474803382",
  appId: "1:411474803382:web:38940fa7dfaf3911b34417"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;