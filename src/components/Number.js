import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import colors from "../constants/Colors";

const Number = (props) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 15,
    marginVertical: 15,
  },
  number: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Number;
