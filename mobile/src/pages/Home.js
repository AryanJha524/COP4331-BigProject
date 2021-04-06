import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home({history})
{
    return(
        <View>
        <Text>Welcome to Parky, Henry and Dorri!</Text>
            <Button title = "Sign In" onPress = {() => history.push("/login")} />
            <Button title = "Sign Up" onPress = {() => history.push("/register")} />
        </View>
    );
}



