import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, Text, SafeAreaView, Button, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function ParkyHeader() {
    return (
        <Text>
            <Text style={styles.parkyHeader}>Parky</Text>
            <Text style={{}}>  </Text>
            <FontAwesome5 name="car" size={30} color="#F8C615" />
        </Text>
    )
}

const styles = StyleSheet.create({
    parkyHeader: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'Chalkduster'
    }
  });