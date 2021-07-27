/* @flow weak */

import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import TaskItem from "./TaskItem";
import * as SQLite from "expo-sqlite";
import { fetchTask } from "../helper/db";

const ListTasks = () => {
  const [taskList, setTaskList] = useState([]);
  const getData = async () => {
    try {
      const dbResult = await fetchTask();
      console.log("dbResult", dbResult);
      setTaskList(dbResult.rows._array);
    } catch (e) {
      console.log("Error while fetching", e);
    }
  };
  getData();

  return (
    <FlatList
      style={styles.container}
      keyExtraxtor={(item, index) => item.ID}
      data={taskList}
      renderItem={(itemData) => (
        <TaskItem id={itemData.item.ID} title={itemData.item.Task} />
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
