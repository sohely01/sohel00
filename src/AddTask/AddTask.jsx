import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      onAddTask({
        id: Date.now(),
        title: taskTitle,
        description: taskDescription,
        status: 'backlog',
      });
      setTaskTitle('');
      setTaskDescription('');
    }
  };

  return (
    <div className="add_task">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Task Title"
        className="task_input"
      />
      <textarea
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
        className="task_textarea"
      />
      <button onClick={handleAddTask} className="add_task_button">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
