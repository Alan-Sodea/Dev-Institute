// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTaskProgress, deleteTask } from '../features/tasksSlice';

const TaskList = ({ categoryId }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.filter(task => task.categoryId === categoryId));

  const handleToggleTask = (id, completed) => {
    dispatch(updateTaskProgress({ id, completed: !completed }));
  };

  const handleDeleteTask = id => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            <button onClick={() => handleToggleTask(task.id, task.completed)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
