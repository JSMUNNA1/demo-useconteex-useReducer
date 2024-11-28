import React, { useContext } from "react";
import { TaskContext } from "./ContextDemo";

const TaskInput = () => {
  const { addTask } = useContext(TaskContext);

  const handleAddTask = () => {
    const taskText = prompt("Enter a new task:");
    if (taskText) {
      addTask(taskText);
    }
  };

  return (
    <div>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
