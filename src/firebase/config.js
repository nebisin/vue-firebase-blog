import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaxaP00grlDFSXzEfZpornxcaU9bShM-w",
  authDomain: "udemy-vue-firebase-5ff56.firebaseapp.com",
  projectId: "udemy-vue-firebase-5ff56",
  storageBucket: "udemy-vue-firebase-5ff56.appspot.com",
  messagingSenderId: "749016195556",
  appId: "1:749016195556:web:fbc3f96c3931898afaa7f1",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
