import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAh0As_j1RSLVAxA8vCud88G97x0Y3MHgU",
  authDomain: "digi-marketplace.firebaseapp.com",
  projectId: "digi-marketplace",
  storageBucket: "digi-marketplace.appspot.com",
  messagingSenderId: "988255173640",
  appId: "1:988255173640:web:15e6bbd5f0dda10655e5bd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth, provider, db };
