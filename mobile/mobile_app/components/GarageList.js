import React, { useState } from "react";
import { View, Picker, StyleSheet,SafeAreaView, Button, Dimensions} from "react-native";
import ParkyHeader from './ParkyHeader';
import { useHistory } from "react-router-dom";

// page 5 

const GarageList = ({latitude, longitude}) => {
  let history = useHistory();
  const [selectedValue, setSelectedValue] = useState("java");
  
  console.log(latitude);
  
  console.log(longitude);
  
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Button
          title = "Go to spot claim page"
          onPress = {() => history.push("/spotclaim")}
        />
      </SafeAreaView>
      <Button
        title = "Return to home"
        color = '#ebbd34'
        onPress = {() => history.push("/")}
      />
    </SafeAreaView>
  );
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

export default GarageList;