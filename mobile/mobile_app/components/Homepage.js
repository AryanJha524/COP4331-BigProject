import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, Text, SafeAreaView, Button, ScrollView } from 'react-native';
import Firebase from '../config/firebase';
import { FontAwesome5 } from '@expo/vector-icons'; 
import ParkyHeader from './ParkyHeader';


export default function Homepage (props) {

    const [userParked, setUserParked] = useState(false);
    
    // function to handle finding spot
    const handlePressFind = () => {
        console.log("Find me a spot");
    }

    // function to handle finding spot
    const handlePressPark = () => {
        console.log("Park me");
    }

    // signOut function
    const handlePress = () => {
        console.log('signing out: ' + props.user);
        Firebase.auth().signOut()
    }

    return (
        <SafeAreaView style={styles.container}>
            <ParkyHeader/>
            <Button
                title="Find Me a Spot"
                onPress={handlePressFind}
                style = {styles.button}
            />
            <Button
                title="Park Me"
                onPress={handlePressPark}
                style = {styles.button}
            />
            <Button
                title="Logout"
                onPress={handlePress}
                color = '#ebbd34'
                style = {styles.logoutButton}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    },
    parkyHeader: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'Chalkduster'
    },  
    button : {
        backgroundColor: 'white',
    },
    logoutButton: {
        backgroundColor: 'white',
    }
  });