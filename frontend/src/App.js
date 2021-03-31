import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import PreferencesPage from './pages/PreferencesPage'


import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import fire from './fire.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    fire.auth().onAuthStateChanged((user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });
  
  const signOut = () => {
    fire.auth().signOut()
  };
  
  console.log(isLoggedIn);
  return (
    <div className="App">
      <Router>
        {!isLoggedIn
          ? (
            <>
            <Switch>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
            </>
          ) 
          : (
            <>
            <span onClick={signOut}>
              <a href="#">Sign out</a>
            </span>
            <Switch>
              <Route path="/add-number">
                <AddNumber />
              </Route>
              <Route path="/">
                <ListAllNumbers />
              </Route>
            </Switch>
            </>
          
          )}
      </Router>
    </div>
  );
}
export default App;

//function App() {
  //return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    //<Home />
    // <LoginPage />
    // <RegisterPage />
    //<PreferencesPage/>
  //);
//}

