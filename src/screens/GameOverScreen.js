import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const GameOverScreen = ({ newGameHandle, userNumber, guessRounds }) => {
  return (
    <View style={styles.container}>
      <Text>Game Over!</Text>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          // source={require("../../assets/image/original.png")}
          source={{
            uri: "https://miro.medium.com/max/717/1*JL63tOjYpHJ8QFgjGepNng.png",
          }}
        />
      </View>
      <Text>Number of rounds: {guessRounds}</Text>
      <Text style={{ marginBottom: 15 }}>Your number was: {userNumber}</Text>
      <Button title="NEW GAME" onPress={newGameHandle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    width: 300,
    height: 300,
    overflow: "hidden",
    borderRadius: 150,
    borderWidth: 2,
    marginVertical: 15,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
