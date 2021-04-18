import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Firebase from './config/firebase';
import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';
import FindSpot from './components/FindSpot';

export default function App() {

  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const authListener = Firebase.auth().onAuthStateChanged((user) => {
      setUserLoggedIn(user ? true : false);
      setIsLoading(false);
      setUserProfile(user);
    });
    return authListener;
  }, []);


  return (
    <View style={styles.container}>
      {
        // checks if user is logged in, if so, render homepage component
        // else, ask user to register or login
        userLoggedIn
        ? <Homepage
            user={Firebase.auth().currentUser}
          />
        : <Login/>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
