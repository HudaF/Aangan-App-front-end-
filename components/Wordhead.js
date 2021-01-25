import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CupertinoHeaderWithBackground2 from "./CupertinoHeaderWithBackground2";

function Wordhead(props) {
  return (
    <View style={[styles.container, props.style]}>
      <CupertinoHeaderWithBackground2
        style={styles.cupertinoHeaderWithBackground4}
      ></CupertinoHeaderWithBackground2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  cupertinoHeaderWithBackground4: {
    flex: 1
  }
});

export default Wordhead;
