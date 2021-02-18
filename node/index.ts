import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const app = initializeApp({
    apiKey: "AIzaSyCSwhdsZZ34EQXL-QOOidN9IHUGxmmjPdU",
    authDomain: "havefun-1d170.firebaseapp.com",
    databaseURL: "https://havefun-1d170.firebaseio.com",
    projectId: "havefun-1d170",
    storageBucket: "havefun-1d170.appspot.com",
    messagingSenderId: "473315497267",
    appId: "1:473315497267:web:48b86522c4d135a4",
    measurementId: "G-56GY1RSM8T"
});


const firestore = getFirestore(app);
const ref = doc(firestore, 'coll/New York');

getDoc(ref).then((val) => console.log(val));
