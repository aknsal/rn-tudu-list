/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TaskItem = ({ id, title }) => (
  <View style={styles.container}>
    <Text>{title}</Text>
  </View>
);

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
