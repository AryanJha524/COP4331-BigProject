import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,SafeAreaView, Button, Dimensions} from "react-native";
import ParkyHeader from './ParkyHeader';
import { useHistory } from "react-router-dom";
const axios = require('axios');

// page 5 

const GarageList = ({latitude, longitude}) => {
  let history = useHistory();
  
  const [garageInfo, setGarageInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.post('https://ucfparkyapi.herokuapp.com/findSpot', {lng:longitude, lat:latitude})
    .then(res => {
      setIsLoading(false);
      setGarageInfo(res);
    })
    .catch(err => {
      console.log(err);
      setIsLoading(false);
    })
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.container}>
        {
          isLoading
          ?
          <SafeAreaView>
            <Text style={{color: "white"}}>Loading </Text>
          </SafeAreaView>
          :
          <SafeAreaView>
            <Button
              title = "Go to spot claim page"
              onPress = {() => history.push("/spotclaim")}
            />
            <Button
              title = "Print results"
              onPress = {() => console.log(garageInfo)}
            />
          </SafeAreaView>
        }
        {/* <Button
            title = "Generate list of garages"
            // onPress = {() => getListGarage(longitude, latitude)}
            color = '#ebbd34'
          /> */}
      </SafeAreaView>
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