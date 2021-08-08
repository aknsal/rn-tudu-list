/* @flow weak */

import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import TaskItem from "./TaskItem";

const ListTasks = ({ taskList, updateTaskList }) => {
  return (
    <FlatList
      style={styles.container}
      keyExtractor={(item) => item.ID}
      data={taskList}
      renderItem={(itemData) => (
        <TaskItem
          updateTaskList={updateTaskList}
          id={itemData.item.ID}
          title={itemData.item.Task}
        />
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
