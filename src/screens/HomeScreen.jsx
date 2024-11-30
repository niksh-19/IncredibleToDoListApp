import React, { useState } from "react";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from "../layouts/MainLayout";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTask = (task) => {
    if (task.trim() && !tasks.includes(task)) {
      setTasks([...tasks, task]);
    }
  };

  return (
    <MainLayout>
      <Text style={styles.title}>My To-Do List</Text>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <View style={styles.buttonContainer}>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
          color="#6200ea"
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default HomeScreen;
