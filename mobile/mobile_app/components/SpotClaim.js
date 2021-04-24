import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View, Button, Dimensions} from 'react-native';
import ParkyHeader from './ParkyHeader';
import { useHistory, useLocation } from "react-router-dom";


// page 6

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
  const location = useLocation();

  const [DATA, setDATA] = useState(null);
  
  useEffect(() => {
    setDATA(location.state.DATA);
  })

  const renderItem = ({ item }) => (
    <Item title={makeItem(item.spot, item.isOpen)} />
  );


  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.header}>
        <ParkyHeader/>
      </View>
      <Text style={styles.text}> {location.state.DATA.name} </Text>  
      <FlatList
        data = {location.state.DATA.spotsArray}
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