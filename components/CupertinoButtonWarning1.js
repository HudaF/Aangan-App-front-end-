import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function CupertinoButtonWarning1(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
    ></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,241,222,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    paddingLeft: 16,
    paddingRight: 16
  }
});

export default CupertinoButtonWarning1;
