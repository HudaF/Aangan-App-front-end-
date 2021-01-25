import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import CupertinoHeaderWithBackground2 from './components/CupertinoHeaderWithBackground2';

function ObjectIDent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Image
          source={require('./assets/apple4.jpg')}
          resizeMode="contain"
          style={styles.image}></Image>
      </View>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('./assets/kela3.png')}
              resizeMode="contain"
              style={styles.image2}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('./assets/saib.png')}
              resizeMode="contain"
              style={styles.image2}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('./assets/aam_text.png')}
              resizeMode="contain"
              style={styles.image2}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('./assets/angoor.png')}
              resizeMode="contain"
              style={styles.image2}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  group3: {
    width: 360,
    height: 43,
    marginLeft: 466,
    marginTop: 30,
  },
  group: {
    width: 296,
    height: 177,
    alignContent: 'center',
    justifyContent: 'center',
  },
  rect: {
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 20,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  button: {
    width: 200,
    height: 120,
    backgroundColor: 'rgba(255,191,8,1)',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  image2: {
    width: 95,
    height: 60,
    borderRadius: 5,
    alignSelf: 'center',
  },
});

export default ObjectIDent;
