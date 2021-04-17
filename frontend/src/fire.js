import firebase from 'firebase/app';
import 'firebase/auth';

const fire = firebase.initializeApp({
    apiKey: "AIzaSyBxVrIBcfqQH2n-L-TKOzWcWivwGpZgdCw",
    authDomain: "parky-ff3d6.firebaseapp.com",
    projectId: "parky-ff3d6",
    storageBucket: "parky-ff3d6.appspot.com",
    messagingSenderId: "61199123703",
    appId: "1:61199123703:web:e1914ec42e78dd3ff27ff2"
});

// firebase.initializeApp(fire);
export const auth = fire.auth();
export default fire;