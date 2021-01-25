import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Word(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.کیلا}>کیلا</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  کیلا: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 60,
    width: 82,
    height: 72,
    alignSelf: "center"
  }
});

export default Word;