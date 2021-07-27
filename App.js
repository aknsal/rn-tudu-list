import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  function addTasks(task) {
    setTaskList((prevTasks) => [
      ...prevTasks,
      { id: Math.random().toString(), value: task },
    ]);
  }

  return (
    <View style={styles.container}>
      <HomeScreen addTasks={addTasks} taskList={taskList} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
