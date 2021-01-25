import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function CupertinoHeaderWithBackground(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Go Back")}
        style={styles.button}
      >
        <TouchableOpacity style={styles.leftIconButton}>
          <Icon name="ios-arrow-back" style={styles.leftIcon}></Icon>
          <Text style={styles.leftText}>Back</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          Title
        </Text>
      </View>
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
  button: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    left: 8,
    width: 120,
    top: 0,
    height: 44
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
  textWrapper: {
    flex: 0.58,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 17,
    fontFamily: "poppins-600",
    lineHeight: 17,
    color: "#000"
  }
});

export default CupertinoHeaderWithBackground;
