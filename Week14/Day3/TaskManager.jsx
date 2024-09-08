import React, { useContext, useState } from 'react';
import { TaskContext, ADD_TASK, EDIT_TASK, TOGGLE_TASK, SET_FILTER } from './TaskContext';
import TaskItem from './TaskItem';

const TaskManager = () => {
  const { state, dispatch, editRef } = useContext(TaskContext);
  const [newTaskText, setNewTaskText] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      dispatch({ type: ADD_TASK, payload: { id: Date.now(), text: newTaskText, completed: false } });
      setNewTaskText('');
    }
  };

  const handleEditChange = (text) => {
    dispatch({ type: EDIT_TASK, payload: { id: editTaskId, text } });
    setEditTaskId(null);
    editRef.current.value = '';
  };

  const handleFilterChange = (filter) => {
    dispatch({ type: SET_FILTER, payload: filter });
  };

  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'completed') return task.completed;
    if (state.filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <div>
        <button onClick={() => handleFilterChange('all')}>Show All</button>
        <button onClick={() => handleFilterChange('completed')}>Show Completed</button>
        <button onClick={() => handleFilterChange('active')}>Show Active</button>
      </div>

      <ul>
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
