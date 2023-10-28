import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import GradebookEntry from "./Grade.js";
import HomeScreen from "./Home.js";
import { students as gradebook } from "./gradebook.js";
import StudentProfile from "./StudentProfile.js";

const Stack = createSharedElementStackNavigator();

function MyTabs() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Gradebook"
        component={Gradebook}
        options={() => ({
          ...sharedOptions,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen name="StudentProfile" component={StudentProfile} />
    </Stack.Navigator>
  );
}

const sharedOptions = {
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
  transitionSpec: {
    open: { animation: "timing", config: { duration: 500 } },
    close: { animation: "timing", config: { duration: 500 } },
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

function Gradebook({ navigation }) {
  const [totalBonusPoints, setTotalBonusPoints] = useState(0);

  const rewardMessage = () => {
    if (totalBonusPoints >= 10) return "Pizza for everyone!";
    if (totalBonusPoints >= 5) return "Candy for everyone!";
    return "";
  };

  const incrementTotalBonusPoints = () => {
    setTotalBonusPoints((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Back" onPress={() => navigation.navigate("Home")} />
      </View>

      <View style={styles.titleBar}>
        <Text
          style={styles.titleText}
          onPress={() => navigation.navigate("Home")}
          sharedID="sharedTitle"
        >
          Z101: Gradebook
        </Text>
      </View>
      <FlatList
        data={gradebook}
        renderItem={({ item }) => (
          <GradebookEntry
            student={item}
            incrementTotalBonusPoints={incrementTotalBonusPoints}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.name}
      />
      {totalBonusPoints >= 5 && (
        <Text style={styles.rewardMessage}>{rewardMessage()}</Text>
      )}
    </View>
  );
}

Gradebook.sharedElements = (route, otherRoute, showing) => {
  return [{ id: "sharedTitle" }];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  rewardMessage: {
    fontSize: 20,
    color: "green",
    textAlign: "center",
    marginVertical: 10,
  },
  titleBar: {
    flexDirection: "row", // Changed to row for side-by-side layout
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4A90E2",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  titleText: {
    fontSize: 24,
    color: "white",
    marginLeft: 10, // Added margin for spacing
  },
});
