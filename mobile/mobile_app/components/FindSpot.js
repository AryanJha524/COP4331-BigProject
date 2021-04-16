import React, { useState } from "react";
import { View, Picker, StyleSheet,SafeAreaView } from "react-native";

export default function Login(){
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <SafeAreaView style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Garage A" value="4" />
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
    backgroundColor:"black"
  }
});
