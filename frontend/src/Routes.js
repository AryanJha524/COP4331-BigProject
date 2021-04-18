import React, { Component, useState } from 'react';
import { Router, Switch, Route, useHistory } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import NewPref from './pages/newPref';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';
import history from './history.js';

export default class Routes extends Component {
    render(){
        return (
            <Router history={history}>
              <AuthProvider>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/forgot-password" component={ForgotPassword} />
                <Route exact path="/pref" component={NewPref} />
                <PrivateRoute exact path="/dashboard" component={Dashboard}/> 
                </Switch>
                </AuthProvider>
            </Router>
        )
    }
}

// export default function Routes()
// {
//   return (
//     <Router>
//       <Home path="/" />
//       <LoginPage path="/login" />
//       <RegisterPage path="/register" />
//       <ForgotPassword path="/forgot-password" />
//     </Router>
//   );
// }