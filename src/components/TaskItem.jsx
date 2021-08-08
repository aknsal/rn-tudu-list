/* @flow weak */

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { removeTask } from "../helper/db";
import { getData } from "../helper/getData";

const TaskItem = ({ id, title, updateTaskList }) => {
  const removeTaskHandler = async () => {
    console.log("Clicked", id);
    const recieved = await removeTask(id);
    console.log(recieved);
    const list = await getData();
    console.log("List", list);
    updateTaskList(list);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.item}>{title}</Text>
      <Pressable onPress={removeTaskHandler}>
        <Ionicons name="close-outline" size={28} color="#f75f54" />
      </Pressable>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#defff5",
    padding: 14,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    fontSize: 18,
  },
});
