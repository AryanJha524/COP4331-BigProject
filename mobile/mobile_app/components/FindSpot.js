import React, { useState } from "react";
import { View, Picker, StyleSheet,SafeAreaView, PickerIOSComponent } from "react-native";
import ParkyHeader from './ParkyHeader';


export default function FindSpot(){
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <SafeAreaView style={styles.container}>
      <ParkyHeader/>
      <Picker
        selectedValue={selectedValue}
        style={{ width: '100%'}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Garage A" value="java" />
        <Picker.Item label="Garage B" value="java" />
        <Picker.Item label="Garage C" value="java" />
        <Picker.Item label="Garage D" value="java" />
        <Picker.Item label="Garage E" value="java" />
      </Picker>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor:"black",
    justifyContent:'center',
  }
});