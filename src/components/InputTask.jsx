/* @flow weak */

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const InputTask = ({ addTasks }) => {
  const [task, setTask] = useState("");
  const handleChange = (enteredText) => {
    setTask(enteredText);
  };
  const addTaskHandler = () => {
    addTasks(task);
    setTask("");
  };
  console.log(task);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        placeholder="Enter Task"
        onChangeText={handleChange}
      />
      <TouchableOpacity style={styles.button} onPress={addTaskHandler}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputTask;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 30,
  },
  input: {
    height: 40,
    width: 200,
    padding: 3,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  button: {
    alignItems: "flex-start",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#DDDDDD",
  },
});
