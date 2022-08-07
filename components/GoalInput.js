import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  //state for goal input
  const [text, setText] = useState("");

  //function to set goal input
  function goalInputHandler(text) {
    setText(text);
  }

  //function will get current text from user add it to addGoalHandler which will be passed to App.js to be added in goalText list
  function addGoalHandler() {
    props.onAddGoal(text);
    setText("");
  }

  return (
    //UI for GoalInput
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Goals!!!"
          onChangeText={goalInputHandler}
          value={text}
        />
        <View style={styles.buttonContainer}>
          {/* event to add current text to global list */}
          <View style={styles.button}>
            <Button
              title="Add Goals"
              onPress={addGoalHandler}
              color="#5e0acc"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancle" onPress={props.onCancle} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

//stylesheet
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
