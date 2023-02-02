import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import Task from "./components/task.js";

export default function App() {
  const [task, setTask] = useState();
  const [taskitem, setTaskitem] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskitem([...taskitem, task]);
    setTask(null);
  };
  const completeTask = (index) => {
    let itemCopy = [...taskitem];
    itemCopy.splice(index, 1);
    setTaskitem(itemCopy);
  };

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>today task</Text>
        <View style={styles.items}>
          {taskitem.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item}></Task>
              </TouchableOpacity>
            );
          })}
          {/* <Task text={"task1 "}></Task>
          <Task text={"task2 "}></Task> */}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTask}
      >
        <TextInput
          style={styles.input}
          placeholder={"viet gi do di"}
          value={task}
          onChangeText={(text) => setTask(text)}
        ></TextInput>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
    // alignItems: "center",
    // justifyContent: "center",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTask: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    width: 250,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#c0c0c0",
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#c0c0c0",
  },

  addText: {},
});
