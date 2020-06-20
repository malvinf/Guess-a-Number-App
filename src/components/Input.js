import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.textInput, ...props.style }} />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
