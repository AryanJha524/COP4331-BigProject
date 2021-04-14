import './App.css';
import React, { useEffect, useState, Component } from 'react';
import Home from './pages/Home'; 
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import fire from './fire.js';
import RegisterPage from './pages/RegisterPage';
import Routes from './Routes';
import Dashboard from './pages/Dashboard';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';

export default function App(){
  return (
    <div className="app">
      <Routes />
    </div>
  )
}