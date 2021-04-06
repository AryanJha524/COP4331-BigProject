import React from 'react';
import { Text, View, Button, TextInput} from 'react-native';

const RegisterScreen = (props) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    const [
      isRegistrationSuccess,
      setIsRegistrationSuccess
    ] = useState(false);
    
    const emailInputRef = createRef();
    const passwordInputRef = createRef();

    const handleSubmitButton = () => {
        setErrortext('');
        if (!userName) {
          alert('Please fill in Name');
          return;
        }
        if (!userEmail) {
          alert('Please fill in Email');
          return;
        }
        if (!userPassword) {
          alert('Please fill in Password');
          return;
        }
    }

    if (isRegistrationSuccess) 
    {
	 return (
		 <View
			 style={{
				 flex: 1,
				 backgroundColor: '#ffc904',
				 justifyContent: 'center',
			 }}>
			 <Text Registration Successful />
			 <Button title = "Login" onPress = {() => history.push("/dashboard")}/>
		 </View>
	 );
    }

export default function RegisterPage({history})
{
    return(
        <View>
            <Text> Welcome! </Text>
            <View>
                <TextInput placeholder = "Name" />
                <TextInput placeholder = "Email" />
                <TextInput secureTextEntry={true} placeholder="Password" />
            </View>
            <Button title = "Home" onPress = {() => history.push("/")} />
        </View>
    );
}
}