import React, { useState } from "react";
import { View, Button, StyleSheet, TouchableOpacity } from "react-native";
import StudentCard from "./StudentCard";
import StudentGradeInfo from "./StudentGradeInfo";
const GradebookEntry = ({ student, incrementTotalBonusPoints, navigation }) => {
  const [bonusPoints, setBonusPoints] = useState(0);

  const awardBonusPoint = () => {
    setBonusPoints((prev) => prev + 1);
    incrementTotalBonusPoints();
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("StudentProfile", { student })}
    >
      <View style={styles.container}>
        <StudentCard imageUrl={student.image_url} studentName={student.name} />
        <View style={styles.infoContainer}>
          <StudentGradeInfo
            grade={student.gradeTier}
            absences={student.absences}
            bonus={bonusPoints}
            awardBonusPoint={awardBonusPoint}
          />
          {/* <View style={styles.buttonContainer}>
          <Button title="Award Bonus Point" onPress={awardBonusPoint} />
        </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#F2F2F2",
    padding: 10,
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  buttonContainer: {},
});

export default GradebookEntry;
