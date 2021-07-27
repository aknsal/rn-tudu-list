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
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <HomeScreen addTasks={addTasks} taskList={taskList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
