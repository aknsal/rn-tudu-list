/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import InputTask from "../components/InputTask";
import ListTasks from "../components/ListTasks";

const HomeScreen = () => (
  <View style={styles.container}>
    <InputTask />
    <ListTasks />
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});
