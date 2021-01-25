import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Center } from "@builderx/utils";

function CupertinoHeaderWithBackground1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity
          onPress={() => console.log("Navigate to Go Back")}
          style={styles.leftIconButton}
        >
          <IoniconsIcon
            name="ios-arrow-back"
            style={styles.leftIcon}
          ></IoniconsIcon>
          <Text style={styles.leftText}></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightWrapper}></View>
      <FontAwesomeIcon
        name="align-justify"
        style={styles.icon}
      ></FontAwesomeIcon>
      <Text style={styles.loremIpsum}></Text>
      <TextInput placeholder="" style={styles.textInput}></TextInput>
      <Center horizontal>
        <Text style={styles.wordIdentification}>Word Identification</Text>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(255,191,8,1)",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftWrapper: {
    flex: 0.16,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "#FFFFFF",
    fontSize: 32
  },
  leftText: {
    alignSelf: "center",
    fontSize: 17,
    paddingLeft: 5,
    color: "#FFFFFF"
  },
  rightWrapper: {
    flex: 0.23,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  icon: {
    top: 11,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    width: 40,
    height: 40,
    flex: 0.09,
    right: 5,
    left: 335
  },
  loremIpsum: {
    top: -138,
    left: -345,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 45,
    width: 116
  },
  textInput: {
    top: -228,
    left: -147,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 61,
    width: 42
  },
  wordIdentification: {
    top: 22,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 22,
    width: 219,
    textAlign: "center",
    fontSize: 17
  }
});

export default CupertinoHeaderWithBackground1;
