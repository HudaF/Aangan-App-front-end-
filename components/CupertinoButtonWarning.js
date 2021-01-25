import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function CupertinoButtonWarning(props) {
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
    borderRadius: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderColor: "rgba(74,74,74,1)",
    borderStyle: "solid"
  }
});

export default CupertinoButtonWarning;
