import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import SignIn from './pages/PreferencesPage';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';
import history from './history.js';

export default class Routes extends Component {
    render(){
        return (
          <AuthProvider>
            <Router history={history}>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/forgot-password" component={ForgotPassword} />
                <PrivateRoute exact path="/dashboard" component={Dashboard}/> 
                </Switch>
            </Router>
          </AuthProvider>
        )
    }
}