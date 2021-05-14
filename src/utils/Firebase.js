import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjxM6p8i0IvDt9tBxi8TgdJK6GuoSgz0Q",
    authDomain: "ps-mobile-app-4e1d8.firebaseapp.com",
    projectId: "ps-mobile-app-4e1d8",
    storageBucket: "ps-mobile-app-4e1d8.appspot.com",
    messagingSenderId: "552362969047",
    appId: "1:552362969047:web:1571fa783adb7fa5c76d92"
};

firebase.initializeApp(firebaseConfig);

export default firebase;