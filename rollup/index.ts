// import { doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged } from '@firebase/auth';
// import { auth, firestore } from './firebase';

// onAuthStateChanged(auth, (user) => {
//     if(user){
//         console.log('user logged in: ', user.uid);
//     } else {
//         console.log('no user')
//     }
// });

// async function run() {
//     getDoc(doc(firestore, 'coll/New York')).then(d => console.log('auth initialize sync', d.data()));

//     import('./login').then(async ({signIn}) => {
//         const credential = await signIn();
//         console.log('logged in asyn with: ', credential.user.uid);
//     });
// }

// run();

console.log('main ts');

import('./u1').then(({myHello}) => {
    myHello();
})

import('./u2').then(({myHi}) => {
    myHi();
})
