/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  return (
    <SafeAreaView>
      <ToDoList/>
      <ToDoForm/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 50,
    padding: 20,
  },
});

export default App;
