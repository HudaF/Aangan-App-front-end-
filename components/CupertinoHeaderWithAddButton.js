import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function CupertinoHeaderWithAddButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity style={styles.leftIconButton}>
          <IoniconsIcon
            name="ios-arrow-back"
            style={styles.leftIcon}
          ></IoniconsIcon>
          <Text style={styles.leftText}>Back</Text>
        </TouchableOpacity>
      </View>
      <EntypoIcon name="menu" style={styles.icon}></EntypoIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(3,48,140,1)",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "rgba(255,255,255,1)",
    fontSize: 32
  },
  leftText: {
    alignSelf: "center",
    fontSize: 15,
    paddingLeft: 5,
    color: "rgba(255,255,255,1)",
    fontFamily: "Poppins-Regular"
  },
  icon: {
    top: 10,
    left: 328,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    width: 26,
    height: 27
  }
});

export default CupertinoHeaderWithAddButton;
