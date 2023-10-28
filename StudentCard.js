import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const StudentCard = ({ imageUrl, studentName }) => {
  let url = imageUrl ? imageUrl : "https://via.placeholder.com/200";
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.thumbnail} />
      <Text>{studentName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "30%",
    padding: 10,
    alignItems: "center",
  },
  thumbnail: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  star: {
    fontSize: 24,
    color: "red",
    marginTop: 10,
  },
});

export default StudentCard;
