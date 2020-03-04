import * as functions from 'firebase-functions';

// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/functions';


firebase.initializeApp({
    apiKey: "AIzaSyAWl_Nfu9wpKkEgQvqmtTL2w-6pbjFE3H0",
    authDomain: "functions-testing-9ba96.firebaseapp.com",
    databaseURL: "https://functions-testing-9ba96.firebaseio.com",
    projectId: "functions-testing-9ba96",
    storageBucket: "functions-testing-9ba96.appspot.com",
    messagingSenderId: "62926558536",
    appId: "1:62926558536:web:e550d0befef64c1c348f7d",
    measurementId: "G-DZS5FW3T3W"
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  const auth = firebase.auth();
//  console.log('auth is ', auth);
// });

export = functions
  .pubsub.schedule('every 1 minutes')
  .onRun(context => {
    try {
      const user = firebase
        .auth()
        .signInWithEmailAndPassword('blabla@test.com', 'blablapass');
      console.log('authenticated');
      console.log(user);
    } catch (err) {
      console.log(err);
    }
    return null;
  });
