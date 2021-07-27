/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import InputTask from "../components/InputTask";
import ListTasks from "../components/ListTasks";

const HomeScreen = ({ addTasks, taskList }) => (
  <View style={styles.container}>
    <Text>I'm HomeScreen</Text>
    <InputTask addTasks={addTasks} />
    <ListTasks taskList={taskList} />
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
