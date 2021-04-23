import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, Alert, SafeAreaView, Button, TextInput, Text} from 'react-native';
import Firebase from '../config/firebase';
import ParkyHeader from './ParkyHeader';
import { useHistory } from "react-router-dom";
const axios = require('axios');

// page 2, 3

export default function ParkUser() {
    let history = useHistory();

    const [garageName, setGarage] = useState(null);
    const [spotNumber, setSpot] = useState(-1);
    const [isParked, setParkStatus] = useState(false);


    const handleGarage = (garage) => {
        setGarage(garage);
    }

    const handleSpot = (spot) => {
        setSpot(spot);            
    }

    const parkUser = (garageName, spotNumber) => {
        // call parkSpot API  -- when running locally, change IP address to your local IP address
        let url = 'https://ucfparkyapi.herokuapp.com/parkSpot';

        axios.post(url, {
            garageName: garageName,
            spotNumber: spotNumber
        })
        .then(response => {
            if (response.data.success) {
                console.log(response.data);
                setParkStatus(true);
            }
            else {
                console.log("couldn't park here")
            }
          }).catch(error => {
            console.log(error);
          });
    }

    const handlePress = () => {
        if (garageName === null) {
            Alert.alert(
                "Invalid garage name!",
                "Please enter a valid garage",
                [
                    {
                        text: "Dismiss",
                        style: "cancel"
                    }
                ]
            )
        }
        else if (spotNumber <= 0) {
            console.log("error, garagename and spotnumber are required!")
            Alert.alert(
                "Invalid spot number!",
                "Please enter a valid spot",
                [
                    {
                        text: "Dismiss",
                        style: "cancel"
                    }
                ]
            )
        }
        else {
            parkUser(garageName, spotNumber);
        }
    }

    const handleLeave = () => {
        // call leave spot API -- when running locally, change IP address to your local IP address
        let url = 'https://ucfparkyapi.herokuapp.com/leaveSpot';

        axios.post(url, {
            garageName: garageName,
            spotNumber: spotNumber
        })
        .then(response => {
            if (response.data.success) {
                setParkStatus(false);
                history.push('/');
            }
          }).catch(error => {
            console.log(error);
          });
    }
    
    let text2 = " Spot: " + spotNumber;

    return (
        <SafeAreaView style={styles.container}>
            <ParkyHeader/>
            <SafeAreaView style={styles.container}>
            {
                isParked 
                ?
                <SafeAreaView style={styles.container}>
                    <SafeAreaView style={styles.container}>
                        <Text style = {styles.text}>
                            {garageName}
                        </Text>
                        <Text style = {styles.text}>
                            {text2}
                        </Text>
                    </SafeAreaView>
                    <Button
                    title="Leave spot"
                    onPress={handleLeave}
                    />
                </SafeAreaView>
                :
                <SafeAreaView style={styles.container}>
                    <SafeAreaView style={styles.container}>
                        <TextInput
                            style={styles.input}
                            textAlign="center"
                            placeholder="Enter the garage name"
                            onChangeText={handleGarage}
                            secureTextEntry={false}
                            keyboardAppearance = "dark"
                        />
                        <TextInput
                            style={styles.input}
                            textAlign="center"
                            placeholder="Enter your spot number"
                            keyboardAppearance = "dark"
                            secureTextEntry={false}
                            onChangeText={handleSpot}
                        />
                        <Button
                            title="Park Me"
                            color = '#ebbd34'
                            onPress={handlePress}
                        />
                    </SafeAreaView>
                    <Button
                        title="Return to home"
                        color = '#ebbd34'
                        onPress={() => history.push('/')}
                    />
                </SafeAreaView>
            }
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 200,
      margin: 12,
      borderWidth: 1,
      backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
      },
    text: {
        color: "white",
        fontSize: 20
    }
  });