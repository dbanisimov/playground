import * as firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp({
    apiKey: "AIzaSyBNHCyZ-bpv-WA-HpXTmigJm2aq3z1kaH8",
    authDomain: "jscore-sandbox-141b5.firebaseapp.com",
    projectId: "jscore-sandbox-141b5"
});
const db = firebase.database();
console.log(db);