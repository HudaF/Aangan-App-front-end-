import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View, StatusBar, Text, Image } from "react-native";
import CupertinoHeaderWithBackground from "./components/CupertinoHeaderWithBackground";
import CupertinoButtonWarning from "./components/CupertinoButtonWarning";

function Submodule({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <CupertinoHeaderWithBackground
        style={styles.cupertinoHeaderWithBackground}
      ></CupertinoHeaderWithBackground>
      <View style={styles.group2}>
        <TouchableOpacity
        onPress={() => {navigation.navigate('Urdu Tracing')}}
        >
        <View style={styles.cupertinoButtonWarningStack}>
          <CupertinoButtonWarning
            style={styles.cupertinoButtonWarning}
          ></CupertinoButtonWarning>
          <Text style={styles.letterTracing}>Letter Tracing</Text>
          <Image
            source={require("./assets/alif_bay_jeem_submodule_thick-01.png")}
            resizeMode="cover"
            style={styles.image}
          ></Image>
          <Text style={styles.letterTracing2}>Lets learn letter writing</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.group2}>
        <TouchableOpacity
        onPress={() => {navigation.navigate('Urdu Tracing')}}
        >
        <View style={styles.cupertinoButtonWarningStack}>
          <CupertinoButtonWarning
            style={styles.cupertinoButtonWarning}
          ></CupertinoButtonWarning>
          <Text style={styles.letterTracing}>Word Tracing</Text>
          <Image
            source={require("./assets/angan_submodule_thick-012.png")}
            resizeMode="cover"
            style={styles.image}
          ></Image>
          <Text style={styles.letterTracing2}>Lets learn word writing</Text>
        </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.group2}>
        <TouchableOpacity
        onPress={() => {navigation.navigate('Object Identification')}}
        >
        <View style={styles.cupertinoButtonWarningStack}>
          <CupertinoButtonWarning
            style={styles.cupertinoButtonWarning}
          ></CupertinoButtonWarning>
          <Text style={styles.letterTracing}>Object Identify</Text>
            <Image
              source={require("./assets/object_identify_submodule_270-01.png")}
              resizeMode="cover"
              style={styles.image}
            ></Image>
          <Text style={styles.letterTracing2}>Flashcards for objects</Text>
        </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.group2}>
        <TouchableOpacity
        onPress={() => {navigation.navigate('Word Identification')}}
        >
        <View style={styles.cupertinoButtonWarningStack}>
          <CupertinoButtonWarning
            style={styles.cupertinoButtonWarning}
          ></CupertinoButtonWarning>
          <Text style={styles.letterTracing}>Word Identify</Text>
          <Image
            source={require("./assets/word_identify_submodule-01.png")}
            resizeMode="cover"
            style={styles.image}
          ></Image>
          <Text style={styles.letterTracing2}>Flashcards for words</Text>
        </View>
        </TouchableOpacity>
      </View>
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithBackground: {
    flex:1,
  },
  group2: {
    flex:1,
    alignSelf: "center",
    marginTop: 15,
  },
  stackFiller: {
    flex: 1
  },
  cupertinoButtonWarning: {
    position: "absolute",
    width: 270,
    height: 75,
    bottom: 9,
    left: 8
  },
  letterTracing: {
    position: "absolute",
    fontFamily: "Poppins-SemiBold",
    color: "rgba(74,74,74,1)",
    fontSize: 24,
    left: 86,
    bottom: 36
  },
  image: {
    left: 0,
    width: 90,
    height: 90,
    position: "absolute",
    bottom: 0
  },
  letterTracing2: {
    left: 86,
    position: "absolute",
    fontFamily: "Poppins-Light",
    color: "rgba(74,74,74,1)",
    fontSize: 15,
    bottom: 17
  },
  cupertinoButtonWarningStack: {
    width: 278,
    height: 90
  },
  group3: {
    width: 270,
    height: 81,
    marginTop: 9,
    marginLeft: 46
  },
  cupertinoButtonWarning1: {
    position: "absolute",
    height: 75,
    bottom: 0,
    left: 0,
    right: 0
  },
  wordTracing: {
    position: "absolute",
    fontFamily: "Poppins-SemiBold",
    color: "rgba(74,74,74,1)",
    fontSize: 24,
    left: 78,
    bottom: 29
  },
  image1: {
    left: 3,
    width: 80,
    height: 79,
    position: "absolute",
    bottom: 2
  },
  letterTracing4: {
    left: 78,
    position: "absolute",
    fontFamily: "Poppins-Light",
    color: "rgba(74,74,74,1)",
    fontSize: 15,
    bottom: 9
  },
  cupertinoButtonWarning1Stack: {
    height: 81
  },
  group4: {
    width: 270,
    height: 78,
    marginTop: 25,
    marginLeft: 46
  },
  group: {
    width: 270,
    height: 78
  },
  cupertinoButtonWarning2: {
    position: "absolute",
    height: 75,
    bottom: 3,
    left: 0,
    right: 0
  },
  objectIdentify: {
    position: "absolute",
    fontFamily: "Poppins-SemiBold",
    color: "rgba(74,74,74,1)",
    fontSize: 24,
    left: 78,
    bottom: 32
  },
  image2: {
    left: 1,
    width: 74,
    height: 75,
    position: "absolute",
    bottom: 0
  },
  letterTracing6: {
    left: 78,
    position: "absolute",
    fontFamily: "Poppins-Light",
    color: "rgba(74,74,74,1)",
    fontSize: 15,
    bottom: 13
  },
  cupertinoButtonWarning2Stack: {
    height: 78
  },
  group5: {
    width: 270,
    height: 78,
    marginTop: 21,
    marginLeft: 46
  },
  cupertinoButtonWarning3: {
    position: "absolute",
    height: 75,
    bottom: 3,
    left: 0,
    right: 0
  },
  wordIdentify: {
    position: "absolute",
    fontFamily: "Poppins-SemiBold",
    color: "rgba(74,74,74,1)",
    fontSize: 24,
    left: 78,
    bottom: 32
  },
  image3: {
    left: 1,
    width: 74,
    height: 75,
    position: "absolute",
    bottom: 0
  },
  flashcardsForWords: {
    left: 78,
    position: "absolute",
    fontFamily: "Poppins-Light",
    color: "rgba(74,74,74,1)",
    fontSize: 15,
    bottom: 13
  },
  cupertinoButtonWarning3Stack: {
    height: 78
  },
  rect: {
    width: 360,
    height: 23,
    backgroundColor: "rgba(255,241,222,1)",
    marginTop: -542
  }
});

export default Submodule;
