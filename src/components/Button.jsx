import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Button = ({ title, onPress, pressedButton, buttonColor }) => {
  return (
    <View style={styles.container}>
       <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? pressedButton : buttonColor,
          },
          styles.button,
        ]}
        onPress={onPress} 
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 20,
  },
});
