import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,SafeAreaView, TouchableOpacity, Dimensions, FlatList} from "react-native";
import ParkyHeader from './ParkyHeader';
import { useHistory } from "react-router-dom";
const axios = require('axios');

// page 5 

const GarageList = ({latitude, longitude}) => {
  let history = useHistory();
  
  const [garageInfo, setGarageInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const apiRequest = async () => {
    const data = await axios.post('https://ucfparkyapi.herokuapp.com/findSpot', {lng:longitude, lat:latitude})
    setGarageInfo(data);
  }

  useEffect(() => {
    setIsLoading(true);
    apiRequest();
    setIsLoading(false);
  }, [])


  const handlePress = (garageName) => {
    for (let i = 0; i < garageInfo.data.length; i++) {
      if (garageInfo.data[i].name.localeCompare(garageName) == 0) {
        history.push({
          pathname: '/spotclaim',
          state: {
            DATA: garageInfo.data[i]
          }
      })
      }
    }
  }

  // component to display each garage 
  const Item = ({ title }) => (
    <View>
      <TouchableOpacity onPress={() => handlePress(title)}>
        <Text style={styles.text}>
            {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
  
  const makeItem = (garageName) => {
    return `${garageName}`;
  }

  const renderItem = ({ item }) => (
    <Item title={makeItem(item.name)} />
  );
  
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
            <FlatList
              data={garageInfo.data}
              renderItem={renderItem}
              keyExtractor={item => item._id}
            />
          </SafeAreaView>
        }
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