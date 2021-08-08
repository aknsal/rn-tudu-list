/* @flow weak */

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import InputTask from "../components/InputTask";
import ListTasks from "../components/ListTasks";

const HomeScreen = () => {
  const [taskList, setTaskList] = useState([]);
  const updateTaskList = (list) => setTaskList(list);
  return (
    <View style={styles.container}>
      <InputTask updateTaskList={updateTaskList} />
      <ListTasks updateTaskList={updateTaskList} taskList={taskList} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});
