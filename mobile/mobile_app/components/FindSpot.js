import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, Alert, SafeAreaView, Button, TextInput, Text} from 'react-native';
import Firebase from '../config/firebase';
import ParkyHeader from './ParkyHeader';
import { useHistory } from "react-router-dom";

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

// page 4
export default function FindSpot () {
    
    let history = useHistory();
    const [address, setAddress] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);


    const handleAddress = (address) => {
        setAddress(address)
    }

    const handlePressAddress = () => {
        console.log("Handling address");
    }

    const handlePressLocation = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            Alert.alert(
                "Couldn't find user location",
                "Please try again or enter your address",
                [
                    {
                        text: "Dismiss",
                        style: "cancel"
                    }
                ]
            )
        }

        let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.BestForNavigation});
        const { latitude , longitude } = location.coords;
        setLongitude(longitude);
        setLatitude(latitude);
        
        console.log(latitude);
        console.log(longitude);
        // call our own api with the latitude and longitude
        // push to garageList with props of array of garages 
        
        /*history.push({
            pathname: "/garagelist",
            state: {
                long: longitude,
                lat: latitude
            }
        });
        */
    }

    return (
        <SafeAreaView style={styles.container}>
            <ParkyHeader/>
            <SafeAreaView style={styles.container}>
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        textAlign="center"
                        placeholder="Enter your destination address"
                        keyboardAppearance = "dark"
                        secureTextEntry={false}
                        onChangeText={handleAddress}
                    />
                    <Button
                        title="Use address"
                        color = '#ebbd34'
                        onPress={handlePressAddress}
                    />
                    <Text style={styles.text}>
                        - or -
                    </Text>
                    <Button
                        title="Use my location"
                        color = '#ebbd34'
                        onPress={handlePressLocation}
                    />
                </SafeAreaView>
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
        fontSize: 25,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50,
        textAlign:"center"
    }
  });