import './App.css';
import React, { useEffect, useState, Component } from 'react';
import Home from './pages/Home'; 
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import fire, { auth } from './fire.js';
import RegisterPage from './pages/RegisterPage';
import Routes from './Routes';
import Dashboard from './pages/Dashboard';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
//import 'firebase/auth';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';
import NewPref from './pages/newPref';

export default function App(){
  const[userLoggedIn, setUserLoggedIn] = useState(false);
  const[userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authListener = auth.onAuthStateChanged((user) => {
      setUserLoggedIn(user ? true : false);
      setIsLoading(false);
      setUserProfile(user);
    });
    return authListener;
  }, []);

  return (
    userLoggedIn ?
      <Dashboard user={auth.currentUser}/>
      :
      <Routes />
  )
}