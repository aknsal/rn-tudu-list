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
        autoFocus
      />
      <TouchableOpacity style={styles.button} onPress={addTaskHandler}>
        <Text style={{ fontSize: 16, color: "#fff" }}>Add</Text>
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
    marginTop: 50,
  },
  input: {
    height: 40,
    fontSize: 20,
    flex: 1,
    padding: 3,
    marginLeft: 10,
    marginRight: 5,
    marginBottom: 30,
    borderBottomColor: "#447868",
    borderBottomWidth: 2,
  },
  button: {
    alignItems: "flex-start",
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    backgroundColor: "#447868",
  },
});
