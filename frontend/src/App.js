import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './pages/Home'; 
import { BrowserRouter as Router} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import fire from './fire.js';
import RegisterPage from './pages/RegisterPage';
import history from './history';
import Routes from './Routes';
import Dashboard from './pages/Dashboard';

function App() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () =>
  {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire.auth().signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code)
      {
        case "auth/invalid-email":
        case "auth.user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
      }
    });
  };

  const handleSignUp = () => {
    clearErrors();
    fire.auth().createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch(err.code) {
        case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
      }
    });
  }

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user){
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="app">
      <Dashboard />
      {/* <Routes /> */}
    </div>
  );
}

export default App;
