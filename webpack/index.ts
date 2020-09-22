    
    import { initializeApp } from 'firebase/app';
    import { getFirestore, doc, getDoc } from 'firebase/firestore';

    const app = initializeApp({     apiKey: "AIzaSyBpikCPYbwAohiGbh57-MgN4AwvowDkC9o",
    authDomain: "havefun-1d170.firebaseapp.com",
    databaseURL: "https://havefun-1d170.firebaseio.com",
    projectId: "havefun-1d170",
    storageBucket: "havefun-1d170.appspot.com",
    messagingSenderId: "473315497267",
    appId: "2:473315497267:web:a04e8a263a40ac31",
    measurementId: "G-1XY5MX9MLD"
    });


    console.log(app, getFirestore, doc, getDoc);
 


/** MESSAGING */
// const messaging = firebase.messaging();
// messaging.usePublicVapidKey('BKUDDOJYIsphesP-FC5o6o_fGNpzS2RMVDduHXAMlNQWXB4fWRi1HCrHqqa29MDgxzdOvc4wMCZOgpc53Zbp_QE');

// messaging.requestPermission()
//     .then(function () {
//         console.log('Permission granted.');
//     })
//     .catch(function (e) {
//         console.log('Error occured.');
//     });

// messaging.getToken().then(console.log);

// messaging.onMessage(function (payload) {
//     console.log('Message received.');
//     console.log(payload);
// });

/** AUTH */
