import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const StudentGradeInfo = ({ grade, absences, bonus, awardBonusPoint }) => {
  return (
    <View style={styles.container}>
      <View style={styles.scoreRow}>
        <Text style={styles.scoreLabel}>Score</Text>
        <Text style={styles.scoreValue}>{grade}</Text>
      </View>
      <View style={styles.absencesBonusRow}>
        <View style={styles.section1}>
          <Text style={styles.label}>Absences</Text>
          <Text style={styles.value}>{absences}</Text>
        </View>
        <View style={styles.section2}>
          <Text style={styles.label}>Bonus Points</Text>
          <Text style={styles.value}>{bonus}</Text>
          <Button
            title="Award Bonus Point"
            style={{ width: "20" }}
            onPress={awardBonusPoint}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  scoreRow: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 1,
    borderColor: "black",
  },
  absencesBonusRow: {
    borderTopColor: "black",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  section1: {
    alignItems: "center",
    flex: 1,
  },
  section2: {
    paddingTop: 40,
    alignItems: "center",
    flex: 2,
    borderLeftColor: "black",
    borderLeftWidth: 1,
  },

  label: {
    fontWeight: "bold",
  },
  scoreLabel: {
    flex: 1,
    fontWeight: "bold",
  },
  scoreValue: {
    flex: 1,
    fontSize: 18,
    color: "black",
  },
  value: {
    fontSize: 16,
  },
});

export default StudentGradeInfo;
