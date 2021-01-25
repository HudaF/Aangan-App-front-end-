import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function CupertinoButtonSuccess(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
    ></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(231,247,211,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    paddingLeft: 16,
    paddingRight: 16
  }
});

export default CupertinoButtonSuccess;
