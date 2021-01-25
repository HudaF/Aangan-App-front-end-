import * as React from 'react';
import { Text, Button, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Tracing({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Urdu Letter Tracing
      </Text>
      <View style={styles.check}>
      <Image style={styles.logo} source={require('../assets/Jeem.png')} />
      <Image style={styles.logo} source={require('../assets/jahaz.jpg')} />
      </View>
      
      <View style={styles.container1}>
          
        <View style={styles.logo2} >
        <View style={styles.logo3} >
        </View>
        </View>



        <Button 
            title="SUBMIT"
            color="green"
            onPress={() => navigation.navigate("Urdu Tracing - Correct")}
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
},
logo3:
{
  height: "100%",
  width: "100%",
  backgroundColor:"white"
}
});

