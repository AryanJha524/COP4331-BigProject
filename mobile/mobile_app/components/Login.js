import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Firebase from '../config/firebase';


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
        <View>
             <Text>Login Component</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                onChangeText={handleEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry={true}
                onChangeText={handlePassword}
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