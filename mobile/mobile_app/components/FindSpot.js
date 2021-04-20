import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, Alert, SafeAreaView, Button, TextInput, Text} from 'react-native';
import Firebase from '../config/firebase';
import ParkyHeader from './ParkyHeader';
import { useHistory } from "react-router-dom";

export default function FindSpot () {
    
    let history = useHistory();
    const [address, setAddress] = useState(null);

    const handleAddress = (address) => {
        setAddress(address)
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
                        onChangeText={(handleAddress)}
                    />
                    <Button
                        title="Use address"
                        color = '#ebbd34'
                        onPress={() => history.push('/garagelist')}
                    />
                    <Text style={styles.text}>
                        - or -
                    </Text>
                    <Button
                        title="Use my location"
                        color = '#ebbd34'
                        onPress={() => history.push('/garagelist')}
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