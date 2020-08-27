import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCQ9A5mR0EyW8YHnnTrn58fzxXfyewkrgA",
  authDomain: "instagram-clone-d1536.firebaseapp.com",
  databaseURL: "https://instagram-clone-d1536.firebaseio.com",
  projectId: "instagram-clone-d1536",
  storageBucket: "instagram-clone-d1536.appspot.com",
  messagingSenderId: "573652892805",
  appId: "1:573652892805:web:ead9109aef6b5e4cd73dec",
  measurementId: "G-KT27FKPWTQ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
