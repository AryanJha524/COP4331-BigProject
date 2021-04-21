import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, Text, SafeAreaView, Button, TextInput} from 'react-native';
import Firebase from '../config/firebase';
import ParkyHeader from './ParkyHeader';
import { useHistory } from "react-router-dom";


export default function PasswordRecovery() {
    const [email, setEmail] = useState(null);
    let history = useHistory();
    const handleEmail = (email) => {
        setEmail(email);
    };

    const handlePasswordRecovery = () => {
        Firebase.auth().sendPasswordResetEmail(email);
        console.log("password recovery email has been set");
        // add a push to go back to login screen
        history.push("/login");
    }

    return (
        <SafeAreaView style={styles.container}>
            <ParkyHeader/>
            <SafeAreaView style={styles.container}>
                <Text>Password recovery</Text>
                <TextInput
                    style={styles.input}
                    textAlign="center"
                    placeholder="Please enter the email you used to sign up"
                    onChangeText={handleEmail}
                    secureTextEntry={false}
                    keyboardAppearance = "dark"
                />
                <Button
                    title="Send password recovery email"
                    color = '#ebbd34'
                    onPress={handlePasswordRecovery}
                />
                <Button
                    title="Return to login"
                    color = '#ebbd34'
                    onPress={() => history.push("/login")}
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
        color: 'white',
        fontSize: 16
    }
  });