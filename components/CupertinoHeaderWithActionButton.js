import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function CupertinoHeaderWithActionButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.urdu}>
          Urdu
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#EFEFF4",
    paddingRight: 8,
    paddingLeft: 8
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  urdu: {
    fontSize: 17,
    fontFamily: "poppins-600",
    lineHeight: 17,
    color: "#000"
  }
});

export default CupertinoHeaderWithActionButton;
