import React, { useState } from 'react';
import './card.css';
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather';

const Card = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div className='card'>
      <div className="card_top">
        <div className="card_top_labels">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task"
            className="border p-2 rounded w-full mb-2"
          />
          <button
            onClick={handleAddTask}
            className="Add_task"
          >
            Add Task
          </button>
        </div>
        <MoreHorizontal />
      </div>

      {/* Card Title */}
      <div className="card_title">
        <h4>Task List</h4>
      </div>

      {/* Task List Display */}
      <ul className="task_list">
        {tasks.map((t, index) => (
          <li key={index} className="task_item border-b py-1">
            {t}
          </li>
        ))}
      </ul>

      {/* Card Footer */}
      <div className="card_footer">
        <p>
          <Clock /> 27 Dec
        </p>
        <p>
          <CheckSquare /> {tasks.length}/4
        </p>
      </div>
    </div>
  );
};

export default Card;
