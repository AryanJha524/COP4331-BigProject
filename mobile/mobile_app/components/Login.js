import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, Text, SafeAreaView, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import Firebase from '../config/firebase';
import ParkyHeader from './ParkyHeader';
import { useHistory } from "react-router-dom";



export default function Login() {
    let history = useHistory();
    const [passwordRecovery, setPasswordRecovery] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const doLogin = (email, password) => {
        Firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((err) => console.log(err));
    };

    const handleEmail = (email) => {
        setEmail(email);
    };

    const handlePassword = (password) => {
        setPassword(password);
    };

    const handlePress = () => {
        doLogin(email, password);
    };

    const handlePasswordRecovery = () => {
        Firebase.auth().sendPasswordResetEmail(email);
        setPasswordRecovery(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ParkyHeader/>
            {
                passwordRecovery
                ?
                <SafeAreaView style={styles.container}>
                    <TextInput
                    style={styles.input}
                    textAlign="center"
                    placeholder="Enter the email you used to sign up for an account"
                    onChangeText={handleEmail}
                    secureTextEntry={false}
                    keyboardAppearance = "dark"
                    />
                    <Button
                        title="Send recovery email"
                        color = '#ebbd34'
                        onPress={handlePasswordRecovery}
                    />
                </SafeAreaView>
                :
                <SafeAreaView style={styles.container}>
                    <TextInput
                        style={styles.input}
                        textAlign="center"
                        placeholder="Enter your email"
                        onChangeText={handleEmail}
                        secureTextEntry={false}
                        keyboardAppearance = "dark"
                    />
                    <TextInput
                        style={styles.input}
                        textAlign="center"
                        placeholder="Enter your password"
                        keyboardAppearance = "dark"
                        secureTextEntry={true}
                        onChangeText={handlePassword}
                    />
                    <Button
                        title="Login"
                        color = '#ebbd34'
                        onPress={handlePress}
                    />
                    <TouchableOpacity onPress={() => setPasswordRecovery(true)}>
                    <Text style={{color: "red"}}>
                        Forgot your password? Click here
                    </Text>     
                    </TouchableOpacity>
            </SafeAreaView>
            }
            
            <Button
                    title="Don't have an account? Register here"
                    color = '#ebbd34'
                    onPress={() => console.log('Register button')}
                />   
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