import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA6QsIEzrBBHK-cK6DXEaMpJqpC3rU2HZY",
    authDomain: "instagram-clone-4f983.firebaseapp.com",
    databaseURL: "https://instagram-clone-4f983.firebaseio.com",
    projectId: "instagram-clone-4f983",
    storageBucket: "instagram-clone-4f983.appspot.com",
    messagingSenderId: "959781776583",
    appId: "1:959781776583:web:ff15208d53f3b9a21062e2",
    measurementId: "G-XGKKR5GY6M"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };