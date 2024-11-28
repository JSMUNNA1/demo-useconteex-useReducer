import React, { useContext } from "react";
import { TaskContext } from "./ContextDemo";

const TaskOutput = () => {
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <p>No tasks available. Add a new task to get started!</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span onClick={() => toggleTask(task.id)}>{task.text}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskOutput;
