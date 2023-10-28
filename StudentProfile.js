import { Button, Text, StyleSheet, Image, View } from "react-native";

function StudentProfile({ route, navigation }) {
  const { student } = route.params;

  return (
    <View style={styles.profileContainer}>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Image source={{ uri: student.image_url }} style={styles.thumbnail} />
      <Text>Name: {student.name}</Text>
      <Text>Score: {student.gradeTier}</Text>
      <Text>Absences: {student.absences}</Text>
      {/* You can add bonus points if you have that info in the student object */}
      <Text>Bonus Points: {student.bonusPoints}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 10,
    alignItems: "center",
  },
  thumbnail: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
});

export default StudentProfile;
