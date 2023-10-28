import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.welcomeText}
        onPress={() => navigation.navigate("Gradebook")}
        sharedID="sharedTitle"
      >
        Welcome to GradeBook
      </Text>
    </View>
  );
}

HomeScreen.sharedElements = (route, otherRoute, showing) => {
  return [{ id: "sharedTitle" }];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
});
