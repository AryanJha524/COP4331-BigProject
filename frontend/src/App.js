import './App.css';
import React, { useEffect, useState, Component } from 'react';
import Home from './pages/Home'; 
import { BrowserRouter as Router} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import fire from './fire.js';
import RegisterPage from './pages/RegisterPage';
import Routes from './Routes';
import Dashboard from './pages/Dashboard';
import withFirebaseAuth from 'react-with-firebase-auth'
// import firebase from 'firebase/app';
import 'firebase/auth';
var firebase = require('firebase/app').default;

const firebaseApp = firebase.initializeApp(fire);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends React.Component {
  
  render(){
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
  return (
    // <div className="app">
    //   {/* <Dashboard /> */}
    //   <Routes />
    // </div>
    <div className="App">
    <header className="App-header">
      {
        user 
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in.</p>
      }
      {
        user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
      }
    </header>
  </div>
  );
  }
}

export default withFirebaseAuth({
  providers, firebaseAppAuth,})(App);
