import React, { useReducer } from "react";

// Initial state for the task manager
const initialState = {
  tasks: [],
  filter: "all", // Options: 'all', 'completed', 'pending'
};

// Reducer to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { tasks, filter } = state;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const handleAddTask = () => {
    const text = prompt("Enter task:");
    if (text) {
      dispatch({ type: "ADD_TASK", payload: text });
    }
  };

  const handleToggleTask = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const handleSetFilter = (newFilter) => {
    dispatch({ type: "SET_FILTER", payload: newFilter });
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <button onClick={handleAddTask}>Add Task</button>
        <button onClick={() => handleSetFilter("all")}>Show All</button>
        <button onClick={() => handleSetFilter("completed")}>Completed</button>
        <button onClick={() => handleSetFilter("pending")}>Pending</button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "10px" }}>
            <span onClick={() => handleToggleTask(task.id)}>{task.text}</span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <p>
        Total Tasks: {tasks.length} | Completed:{" "}
        {tasks.filter((task) => task.completed).length} | Pending:{" "}
        {tasks.filter((task) => !task.completed).length}
      </p>
    </div>
  );
};

export default UseReducerDemo;
