import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Firebase from '../config/firebase';

export default function Register () {
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [password2, setPassword2] = useState(null);

    const doRegister = (email, password) => {
        setIsLoading(true);
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((err) => console.log(err))
      };

    const handleEmail = (email) => {
        setEmail(email);
    }

    const handlePassword = (password) => {
        setPassword(password);
    }

    const handlePassword2 = (password2) => {
        setPassword2(password2);
    }

    const handlePress = () => {
        if (password !== password2) {
            console.log("Passwords don't match");
        }
        else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
            console.log("Password must be at least 8 characters long and contain an uppercase and lowercase character");
        }
        else {
            doRegister(email, password);
        }
    }

    return (
        <View>
             <Text>Register Component</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                onChangeText={handleEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter a password"
                secureTextEntry={true}
                onChangeText={handlePassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm your password"
                secureTextEntry={true}
                onChangeText={handlePassword2}
            />
            <Button
                title="Submit Form"
                onPress={handlePress}
            />
        </View>
       
        
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });