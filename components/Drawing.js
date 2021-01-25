import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Drawing() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Draw it!</Text>
      <View style={styles.check}>
        <Image style={styles.logo} source={require('../assets/Mango.PNG')} />
      </View>
      <View style={styles.container1}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.logo1}
            source={require('../assets/correct_mango.png')}
          />
        </View>
        <Button
          title="Retry"
          color="red"
          style={{ width: '50%' }}
          onPress={() => Alert.alert('Generating Exercise')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'orange',
  },
  logo: {
    height: 80,
    width: 80,
  },
  logo1: {
    height: 250,
    width: 250,
    resizeMode: 'contain',
  },
  check: {
    flex: 0.2,
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flex: 0.8,
  },
});
