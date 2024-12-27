import React, { useState } from 'react';
import './Board.css';
import { MoreHorizontal, X } from 'react-feather';

const Board = ({ tasks, onUpdateTask }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const columns = [
    { key: 'backlog', title: 'Backlog' },
    { key: 'todo', title: 'To Do' },
    { key: 'inprogress', title: 'In Progress' },
    { key: 'done', title: 'Done' },
  ];

  const openTaskDetails = (task) => {
    setSelectedTask(task);
  };

  const closeTaskDetails = () => {
    setSelectedTask(null);
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    onUpdateTask(selectedTask.id, newStatus);
    setSelectedTask((prev) => ({ ...prev, status: newStatus }));
  };

  return (
    <div className="board">
      {columns.map(({ key, title }) => (
        <div key={key} className="board_column">
          <div className="board_top">
            <p className="board_top_title">
              {title}
              <span>
                {tasks.filter((task) => task.status === key).length}
              </span>
            </p>
            <MoreHorizontal />
          </div>

          <ul className="task_list">
            {tasks
              .filter((task) => task.status === key)
              .map((task) => (
                <li
                  key={task.id}
                  className="task_item"
                  onClick={() => openTaskDetails(task)}
                >
                  <p className="task_title">{task.title}</p>
                </li>
              ))}
          </ul>
        </div>
      ))}

      {selectedTask && (
        <div className="modal_overlay" onClick={closeTaskDetails}>
          <div
            className="modal_content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal_header">
              <h3>Task Details</h3>
              <X onClick={closeTaskDetails} className="close_icon" />
            </div>
            <div className="modal_body">
              <p><strong>Title:</strong> {selectedTask.title}</p>
              <p><strong>Description:</strong> {selectedTask.description || 'No description provided'}</p>
              <p><strong>Status:</strong></p>
              <select
                value={selectedTask.status}
                onChange={handleStatusChange}
                className="status_dropdown"
              >
                {columns.map(({ key, title }) => (
                  <option key={key} value={key}>
                    {title}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal_footer">
              <button onClick={closeTaskDetails} className="modal_close_btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
