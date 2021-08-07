/* @flow weak */
import * as SQLite from "expo-sqlite";
import { fetchTask } from "../helper/db";

export const getData = async () => {
  let result = [];
  try {
    const dbResult = await fetchTask();
    console.log("dbResult", dbResult);
    result = dbResult.rows._array;
  } catch (e) {
    console.log("Error while fetching", e);
  }
  return result;
};
