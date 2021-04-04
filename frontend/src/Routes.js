import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import history from './history';
import SignIn from './pages/PreferencesPage';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

export default class Routes extends Component {
    render(){
        return (
          <AuthProvider>
            <Router history={history}>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <PrivateRoute exact path="/dashboard" component={Dashboard}/> 
                </Switch>
            </Router>
          </AuthProvider>
        )
    }
}