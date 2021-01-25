import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

function WordIdentification(props) {
  return (
    <View style={styles.container}>
      <View style = {styles.rect}>
        <Image
          source={require('./assets/kela1.png')}
          resizeMode="contain"
          style={styles.image}></Image>
      </View>

      <View
        style={{ flexDirection: 'column', flex: 2, justifyContent: 'space-around' }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('./assets/apple2.jpg')}
              resizeMode="contain"
              style={styles.image2}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('./assets/keela_image.jpg')}
              resizeMode="contain"
              style={styles.image2}></Image>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('./assets/aam.jpg')}
              resizeMode="contain"
              style={styles.image2}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('./assets/grapes.png')}
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
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 0,
  },
  rect: {
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 2,
    borderRadius: 40,
    borderColor: '#000000',
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  imageFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    alignSelf: "center", 
    resizeMode: 'contain',
    backgroundColor: 'white', 
    borderWidth: 0,
    marginTop: 5,
  },
  button: {
    backgroundColor: 'rgba(255,191,8,1)',
    //alignSelf: "center",
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,    
    marginTop: 10,
  },
  image2: {
    borderRadius: 40,
    width: 120,
    height: 120,
  },
});

export default WordIdentification;
