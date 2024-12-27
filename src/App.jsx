import React, { useState } from 'react';
import './App.css';
import AddTask from './AddTask/AddTask';
import Board from './Component/Board/Board';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="app">
      <div className="app_navbar">
        <h2>Scrum Board</h2>
      </div>

      <AddTask onAddTask={addTask} />

      <div className="app_outer">
        <div className="app_boards">
          <Board tasks={tasks} onUpdateTask={updateTaskStatus} />
        </div>
      </div>
    </div>
  );
}

export default App;
