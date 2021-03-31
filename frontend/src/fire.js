// fire.js

import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBxVrIBcfqQH2n-L-TKOzWcWivwGpZgdCw",
    authDomain: "parky-ff3d6.firebaseapp.com",
    projectId: "parky-ff3d6",
    storageBucket: "parky-ff3d6.appspot.com",
    messagingSenderId: "61199123703",
    appId: "1:61199123703:web:e1914ec42e78dd3ff27ff2"
  };

  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }
  const fire = firebase;
  export default fire;