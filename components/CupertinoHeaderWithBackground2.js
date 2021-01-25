import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { Center } from "@builderx/utils";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function CupertinoHeaderWithBackground2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity style={styles.leftIconButton}>
          <IoniconsIcon
            name="ios-arrow-back"
            style={styles.leftIcon}
          ></IoniconsIcon>
          <Text style={styles.leftText}></Text>
        </TouchableOpacity>
      </View>
      <Center horizontal>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.wordIdentification}>
            Word Identification
          </Text>
        </View>
      </Center>
      <FontAwesomeIcon
        name="align-justify"
        style={styles.icon}
      ></FontAwesomeIcon>
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
    alignItems: "flex-start",
    justifyContent: "center",
    width: 40,
    height: 44,
    left: 0
  },
  leftIconButton: {
    flexDirection: "row",
    alignSelf: "flex-start"
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
  textWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 206,
    height: 44
  },
  wordIdentification: {
    fontSize: 21,
    fontFamily: "poppins-600",
    lineHeight: 17,
    color: "rgba(255,255,255,1)"
  },
  icon: {
    position: "absolute",
    color: "rgba(252,250,250,1)",
    fontSize: 30,
    width: 29,
    height: 30,
    right: 9,
    bottom: 7
  }
});

export default CupertinoHeaderWithBackground2;
