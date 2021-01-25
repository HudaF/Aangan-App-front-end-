import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Submitted({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Urdu Letter Tracing</Text>
      <View style={styles.check}>
        <Image style={styles.logo} source={require('../assets/Jeem.png')} />
        <Image style={styles.logo} source={require('../assets/jahaz.jpg')} />
      </View>


        <View style={styles.container1}>
        <Image style={styles.logo2} source={require('../assets/correct_jeem.png')} />
          
        <View style={{backgroundColor: 'white'}} >
        </View>

          <View
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
            }}>
            <Button
              title="RETRY"
              color="red"
              onPress={() => {navigation.navigate("Urdu Tracing - Retry")}}
            />
            <Button
              title="NEXT"
              color="green"
              onPress={() => Alert.alert('Generating Exercise')}
            />
          </View>
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
    width: "100%",
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: "orange",
  },
  logo: {
    height: "100%",
    resizeMode: "contain",
    flexDirection: "row",
    flex : 1,
  },
check: {
  flexDirection: "row",
  flex: 1
},
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "grey",
    height: 200,
    flex:2 
  },
  logo2:
{
  height: "80%",
  width: "100%",
}
});

