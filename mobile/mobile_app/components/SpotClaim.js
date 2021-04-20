import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View, Button, Dimensions} from 'react-native';
import ParkyHeader from './ParkyHeader'
import { useHistory } from "react-router-dom";


// page 6

const spots = [
  
];

const Item = ({ title }) => (
  <Button title = {title} style={styles.item}>
  </Button>
);


export default function SpotClaim() {

  let history = useHistory();

  const[selectedSpot, setSelectedSpot] = useState("")

  var spotNo;
  var spotStatus;

  const renderItem = ({ item }) => (
    <Item title={item.name} />
  );

  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.header}>
        <ParkyHeader />
      </View>
      <Text style={styles.text}> Garage X </Text>  
      <FlatList
        data = {spots}
        renderItem={renderItem}
        keyExtractor={item => item.key}
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
  }
});