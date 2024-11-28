import React, { createContext, useState } from "react";
import TaskInput from "./TaskInput";
import TaskOutput from "./TaskOutput";

export const TaskContext = createContext();

export default function ContextDemo() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      <TaskInput></TaskInput>
      <TaskOutput></TaskOutput>
    </TaskContext.Provider>
  );
}
