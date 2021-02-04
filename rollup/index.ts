// import * as firebase from 'firebase/app';
// import 'firebase/database';
// import 'firebase/messaging';
// import 'firebase/auth';

// firebase.initializeApp({
//     apiKey: "AIzaSyBehpN9M4BSsxbryYdizPCVnGz4nzxcv_c",
//     authDomain: "havefun-1d170.firebaseapp.com",
//     databaseURL: "https://havefun-1d170.firebaseio.com",
//     projectId: "havefun-1d170",
//     storageBucket: "havefun-1d170.appspot.com",
//     messagingSenderId: "473315497267"
// });


// /** MESSAGING */
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

// /** AUTH */
