import React, {useState, createRef} from 'react';
import { Text, View, Button, TextInput, ScrollView, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {createStackNavigator, createAppContainer} from '@react-navigation/stack';
import { addToPhonebook } from '../../services/phonebookServices';
const styles = {
    root: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'gold',
        alignContent: 'center',
    },
    inputStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
    },
    buttonStyle: {
        backgroundColor: 'black',
        borderWidth: '0',
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    },
};

const LoginPage = ({navigation}) =>
{
    const classes = styles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [errorText, setErrorText] = useState('');

    const passwordInputRef = createRef();

    const handleSubmitPress = () => {
        setErrorText('');
        if (!email){
            alert("Please fill out email");
            return;
        }

        if (!password){
            alert("Please fill out password");
            return;
        }


    }
    return(
        <View style={classes.root}>
            <Text> Welcome Back! </Text>
            <View>
                <TextInput style={classes.inputStyle} placeholder = "Email" value={email} onChangeText={(email)=>setEmail(email)} />
                <TextInput style={classes.inputStyle} secureTextEntry={true} placeholder="Password" value={password} onChangeText={(password)=>setPassword(password)} />
                <Button title="login" onPress = {() => history.push("/dashboard")} />
            </View>
            <Button style={classes.buttonStyle} title="Home" onPress={() => history.push("/")} />
        </View>
    );
}
export default LoginPage;