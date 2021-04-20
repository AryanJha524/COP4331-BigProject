import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, SafeAreaView, Button, ScrollView } from 'react-native';
import Firebase from '../config/firebase';
import ParkyHeader from './ParkyHeader';
import { useHistory } from "react-router-dom";



// page 1
// might have to add a navigator to this 

export default function Homepage () {
    let history = useHistory();
    const [userParked, setUserParked] = useState(false);
    

    const handlePressFind = () => {
        console.log("Find me a spot");
    }


    // signOut function
    const handlePress = () => {
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
                onPress={() => history.push("/parkuser")}
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