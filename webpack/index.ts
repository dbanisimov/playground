import { getDatabase } from "firebase/database";
import { getStorage, uploadString, getDownloadURL, ref } from "firebase/storage";
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAWmMIPWNAlJ3n9xyRcpfKaUCmnLgTZnMw",
    authDomain: "its-april.firebaseapp.com",
    databaseURL: "https://its-april.firebaseio.com",
    projectId: "its-april",
    storageBucket: "its-april.appspot.com",
    messagingSenderId: "984636993069",
    appId: "1:984636993069:web:ba87f2195f38a997c392a4"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// const database = getDatabase(firebaseApp);
// console.log('get database ref');
// const databaseRef = database.ref("data.txt");
const storage = getStorage(firebaseApp);
const storageRef = ref(storage, "data.txt");

async function run() {
    await signInAnonymously(auth);
    await uploadString(storageRef, "Hello World");
    const url = await getDownloadURL(storageRef);
    console.log('download url is ', url);
    // await databaseRef.set(url);
}

run();