import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View, Button} from 'react-native';
import ParkyHeader from './components/ParkyHeader';

const spots = [
  
];

const Item = ({ title }) => (
  <Button title = {title} style={styles.item}>
  </Button>
);


export default function SpotClaim() {
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
      <Text style={styles.textStyle}> Garage X </Text>  
      <FlatList
        data = {spots}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor:"black"
  },
  textStyle: {
    alignItems: "center",
    color: "white",
    fontSize: 25,
    height: 120,
    paddingTop: 40
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 60,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  }, 
  header: {
    paddingTop: 30
  }
});