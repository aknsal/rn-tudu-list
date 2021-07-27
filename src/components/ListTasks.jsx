/* @flow weak */

import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import TaskItem from "./TaskItem";

const ListTasks = ({ taskList }) => {
  console.log(taskList);
  return (
    <FlatList
      style={styles.container}
      keyExtraxtor={(item, index) => item.id}
      data={taskList}
      renderItem={(itemData) => (
        <TaskItem id={itemData.item.id} title={itemData.item.value} />
      )}
    />
  );
};

export default ListTasks;

const styles = StyleSheet.create({
  container: {
    flex: 10,
    margin: 10,
  },
});
