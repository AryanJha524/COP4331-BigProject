import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, Text, SafeAreaView, Button, TextInput, Linking } from 'react-native';
import Firebase from '../config/firebase';
import ParkyHeader from './ParkyHeader';

export default function Login() {
    
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const doLogin = (email, password) => {
        setIsLoading(true);
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

    return (
        <SafeAreaView style={styles.container}>
            <ParkyHeader/>
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