import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, Text, SafeAreaView, Button, TextInput, Alert } from 'react-native';
import Firebase from '../config/firebase';
import ParkyHeader from './ParkyHeader';
import { useHistory } from "react-router-dom";



export default function Login() {
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const doLogin = (email, password) => {
        setIsLoading(true);
        Firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((err) => console.log(err));
        Alert.alert(
            "You've been logged in",
            ""
            [
                {
                    text: "Dismiss",
                    style: "cancel"
                }
            ]
        )
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

    return (
        <SafeAreaView style={styles.container}>
            <ParkyHeader/>
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
            </SafeAreaView>
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
      }
  });