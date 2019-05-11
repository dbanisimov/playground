import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBehpN9M4BSsxbryYdizPCVnGz4nzxcv_c",
    authDomain: "havefun-1d170.firebaseapp.com",
    databaseURL: "https://havefun-1d170.firebaseio.com",
    projectId: "havefun-1d170",
    storageBucket: "havefun-1d170.appspot.com",
    messagingSenderId: "473315497267"
});

const firestore = firebase.firestore();
firestore.enablePersistence();

console.log(firestore);

const docRef = firestore.doc('players/me@me.com');
docRef.get().then(value => {
    console.log('getting data from firestore ', value);
});

docRef.get().then(value => {
    console.log('getting data again from firestore ', value);
});