import { StyleSheet, Text, View, Pressable } from "react-native";

//goalItem Component for each goalText
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "black" }}
        onPress={props.onDelete.bind(this, props.id)}
      >
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

//stylesheet
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 20,
    backgroundColor: "#5e0acc",
  },
  text: {
    color: "white",
    fontSize: 22,
    padding: 15,
  },
});

export default GoalItem;
