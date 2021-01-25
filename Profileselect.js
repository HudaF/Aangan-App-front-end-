import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import CupertinoHeaderWithAddButton from './components/CupertinoHeaderWithAddButton';
import Svg, { Ellipse } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';

function Profileselect({ navigation }) {
  return (
    <View style={styles.container}>
      <View style = {{flex : 2, alignContent:"center", justifyContent:"center"}}>
      <Text style={styles.selectYourProfile}>Select Child Profile</Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          flex: 12,
          justifyContent: 'space-around',
        }}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Select Module');
            }}
            style={styles.button2}>
            <View style={styles.rect3}>
              <Image
                source={{
                  uri:
                    'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/91f659f83f34609b202ca0607c52bfc9',
                }}
                resizeMode="contain"
                style={styles.image}></Image>
              <Text style={styles.text}>Chunnu</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Select Module');
            }}
            style={styles.button2}>
            <View style={styles.rect3}>
              <Image
                source={{
                  uri:
                    'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6eecf0fd067560ea133e3d04f4189e54',
                }}
                resizeMode="contain"
                style={styles.image}></Image>
              <Text style={styles.text}>Huda Feroz</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Create Child Profile');
            }}
            style={styles.button2}>
            <View style={styles.rect3}>
            <View style = {styles.image}>
              <Svg viewBox="0 0 66.25 66.25" style={styles.ellipse}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(237,199,140,1)"
                  cx={33}
                  cy={33}
                  rx={33}
                  ry={33}></Ellipse>
              </Svg>
              <Icon name="reddit" style={styles.icon}></Icon>
              </View>
              <Text style={styles.text}>Add Profile</Text>
            </View>
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
  },
  button2: {
    width: 280,
    height: 126,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  rect3: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: 280,
    height: 80,
    backgroundColor: 'rgba(177,234,253,1)',
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: 'rgba(3,48,140,1)',
    fontSize: 32,
  },
  rect3Stack: {
    width: 280,
    height: 126,
  },
  button: {
    width: 280,
    height: 124,
    marginTop: -264,
    marginLeft: 40,
  },
  rect2: {
    width: 280,
    height: 80,
    backgroundColor: 'rgba(177,234,253,1)',
    borderRadius: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    left: 0,
  },
  hudaFeroz: {
    fontFamily: 'Poppins-Bold',
    color: 'rgba(3,48,140,1)',
    fontSize: 32,
    marginTop: 31,
    marginLeft: 50,
  },
  image: {
    alignSelf: 'center',
    top: 0,
    width: 88,
    height: 88,
  },
  rect2Stack: {
    width: 280,
    height: 124,
  },
  rect: {
    width: 360,
    height: 23,
    backgroundColor: 'rgba(255,241,222,1)',
    marginTop: -300,
  },
  cupertinoHeaderWithAddButton: {
    height: 44,
    width: 360,
  },
  group: {
    width: 280,
    height: 115,
    marginTop: 393,
    marginLeft: 40,
  },
  rect4: {
    top: 36,
    width: 280,
    height: 80,
    position: 'absolute',
    backgroundColor: 'rgba(177,234,253,1)',
    borderRadius: 20,
    left: 0,
  },
  addProfile: {
    fontFamily: 'Poppins-Bold',
    color: 'rgba(3,48,140,1)',
    fontSize: 32,
    marginTop: 29,
    marginLeft: 51,
  },
  ellipse: {
    alignSelf: "center",
    marginTop: 20,
    width: 62,
    height: 62,
    //position: 'absolute',
    //left: 107,
  },
  icon: {
    marginTop: 27,
    left: 21,
    position: 'absolute',
    color: 'rgba(3,48,140,1)',
    fontSize: 46,
  },
  rect4Stack: {
    width: 280,
    height: 116,
  },
  selectYourProfile: {
    fontFamily: 'Poppins-Bold',
    color: 'rgba(3,48,140,1)',
    fontSize: 32,
    textAlign: 'center',
  },
});

export default Profileselect;
