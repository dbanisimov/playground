import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

firebase.initializeApp({
  apiKey: "AIzaSyBpikCPYbwAohiGbh57-MgN4AwvowDkC9o",
  authDomain: "havefun-1d170.firebaseapp.com",
  databaseURL: "https://havefun-1d170.firebaseio.com",
  projectId: "havefun-1d170",
  storageBucket: "havefun-1d170.appspot.com",
  messagingSenderId: "473315497267",
  appId: "2:473315497267:web:a04e8a263a40ac31",
  measurementId: "G-1XY5MX9MLD"
});

console.log('initialized Firebase App');

console.log('Blob, ', firebase.firestore.Blob);
console.log(firebase.firestore.Blob.fromBase64String);
console.log(firebase.firestore.Blob.fromBase64String('GRBoQgKB9LW1'));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
