import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Firebase from './config/firebase';
import Register from './components/Register';
import Login from './components/Login';


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


  const handlePress = () => {
    Firebase.auth().signOut()
  }


  return (
    <View style={styles.container}>
      {
        userLoggedIn
        ? <Button
            title="Logout"
            onPress={handlePress}
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
