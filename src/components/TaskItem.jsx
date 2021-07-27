/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TaskItem = ({ id, title }) => (
  <View style={styles.container}>
    <Text style={styles.item}>{title}</Text>
  </View>
);

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#defff5",
    padding: 14,
    margin: 10,
    borderRadius: 10,
  },
  item: {
    fontSize: 18,
  },
});
