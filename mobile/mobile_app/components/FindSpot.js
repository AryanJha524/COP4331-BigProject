import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, Alert, SafeAreaView, Button, TextInput, Text} from 'react-native';
import Firebase from '../config/firebase';
import ParkyHeader from './ParkyHeader';
import { useHistory } from "react-router-dom";
import GarageList from './GarageList';
const axios = require('axios');

import geolocationkey from '../config/geokey';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

// page 4
export default function FindSpot () {
    
    let history = useHistory();
    const [address, setAddress] = useState(null);
    const [haveLocation, setLocation] = useState(false);
    const [lat, setLatitude] = useState(null);
    const [long, setLongitude] = useState(null);


    const handleAddress = (address) => {
        setAddress(address)
    }

    const handlePressAddress = async () => {
        if (address === "" || address === null) {
            Alert.alert(
                "Invalid address",
                "Please try again or use your location",
                [
                    {
                        text: "Dismiss",
                        style: "cancel"
                    }
                ]
            )
        }
        else {
            var url = 'http://api.positionstack.com/v1/forward';
            var params = {
                access_key: geolocationkey,
                query: address
            }
            // call geolocation api with address
            axios.get(url, {params})
            .then(response => {
                console.log(response.data);
                setLocation(true);
              }).catch(error => {
                console.log(error);
              });
        }
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
        setLatitude(latitude)
        setLongitude(longitude);
        setLocation(true);
    }
    return (
        <SafeAreaView style={styles.container}>
            <ParkyHeader/>
            <SafeAreaView style={styles.container}>
                {
                    haveLocation
                    ?
                    <GarageList 
                        latitude={lat}
                        longitude={long}
                    />
                    :
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
                }
            <Button
                title="Return to home"
                color = '#ebbd34'
                onPress={() => history.push("/")}
            />
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