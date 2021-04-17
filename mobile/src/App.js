import React from 'react';
import { StyleSheet, View} from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { AuthProvider } from './Auth';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <AuthProvider>
      <NativeRouter>
        <View style = {styles.container}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
        </View>
      </NativeRouter>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc904',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
