import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  //list of goals
  const [goalText, setGoalText] = useState([]);

  //function to add new goal to existing list of goals
  function addGoalHandler(text) {
    setGoalText((currentGoalText) => [
      ...currentGoalText,
      {
        text: text,
        id: Math.random().toString(),
      },
    ]);
    endAddGoalHandler();
  }
  const [isVisible, setIsVisible] = useState(false);

  function startAddGoalHandler() {
    setIsVisible(true);
  }

  function endAddGoalHandler() {
    setIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setGoalText((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.newGoalButton}>
          <Button
            title="Add New Goal"
            color="#5e0acc"
            onPress={startAddGoalHandler}
          />
        </View>
        {/* calling GoalInput Component to take user input */}
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={isVisible}
          onCancle={endAddGoalHandler}
        />

        {/* Showing each Goal from goalText list */}
        <View style={styles.goalContainer}>
          <FlatList
            data={goalText}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              // calling GoalItem Component to show each goal
              return (
                <GoalItem
                  onDelete={deleteGoalHandler}
                  id={itemData.item.id}
                  text={itemData.item.text}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

//stylesheet
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalContainer: {
    flex: 5,
  },
  newGoalButton: {
    paddingTop: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});
