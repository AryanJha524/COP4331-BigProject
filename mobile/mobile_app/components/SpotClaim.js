import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View, Button, Dimensions} from 'react-native';
import ParkyHeader from './components/ParkyHeader'
import { useHistory } from "react-router-dom";


// page 6

const DATA = {
    "location": {
      "type": "Point",
      "coordinates": [
        28.60116,
        -81.20498
      ]
    },
    "_id": "608096650ba75f47fb65b89b",
    "name": "Garage I",
    "numberSpots": 1231,
    "spotsArray": [
      {
        "_id": "608096650ba75f47fb65b89c",
        "spot": "0",
        "isOpen": true
      },
      {
        "_id": "608096650ba75f47fb65b89d",
        "spot": "1",
        "isOpen": true
      },
      {
        "_id": "608096650ba75f47fb65b89e",
        "spot": "2",
        "isOpen": true
      }
    ]
}

const Item = ({ title }) => (
  <Text style={styles.text}>
    {title}
  </Text>
);

const makeItem = (spotNo, spotStatus) => {
  if(spotStatus == true)
  {
    var status = "Open";
  }
  else
  {
    status = "Not Open";
  }
  return `Spot ${spotNo} ${status}`;
}


export default function SpotClaim() {

  let history = useHistory();

  const renderItem = ({ item }) => (
    <Item title={makeItem(item.spot, item.isOpen)} />
  );


  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.header}>
        <ParkyHeader/>
      </View>
      <Text style={styles.text}> {DATA.name} </Text>  
      <FlatList
        data = {DATA.spotsArray}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
      <Button
        title="Return to home"
        color = '#ebbd34'
        onPress={() => history.push("/")}
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
  },
  item: {
    color: "white",
    fontSize: 25,
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
    textAlign:"center"
  }
});