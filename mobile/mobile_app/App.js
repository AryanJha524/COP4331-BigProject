import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Firebase from './config/firebase';

import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';
import ParkUser from './components/ParkUser';
import SpotClaim from './components/SpotClaim';
import FindSpot from './components/FindSpot';
import GarageList from './components/GarageList';

import { NativeRouter, Route } from "react-router-native";
import { useHistory } from "react-router-dom";

export default function App() {
  let history = useHistory();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const authListener = Firebase.auth().onAuthStateChanged((user) => {
      setUserLoggedIn(user ? true : false);
    });
    return authListener;
  }, []);


  return (
    <NativeRouter>
      <View style={styles.container}>
        {
          // checks if user is logged in, if so, render homepage component
          // else, ask user to register or login
          userLoggedIn
          ?
            <View style = {styles.container}>
                {/* Page 1 */ }
                <Route exact path = "/">
                  <Homepage user={Firebase.auth().currentUser}/>
                </Route>
                {/* Page 2,3 */ }
                <Route exact path = "/parkuser">
                  <ParkUser/>
                </Route>
                {/* Page 4 */ }
                <Route exact path = "/findspot">
                  <FindSpot/>
                </Route>
                {/* Page 5 */ }
                <Route exact path = "/garagelist">
                  <GarageList/>
                </Route>
                {/* Page 6 */ }
                <Route exact path ="/spotclaim">
                  <SpotClaim/>
                </Route>
            </View>
          : 
            <View style = {styles.container}>
              <Login/>
            </View>
        }
        <StatusBar style="auto" />
      </View>
    </NativeRouter>
    
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
