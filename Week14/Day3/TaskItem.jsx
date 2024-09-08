import React, { useContext, useState, useRef } from 'react';
import { TaskContext, TOGGLE_TASK, EDIT_TASK } from './TaskContext';

const TaskItem = ({ task }) => {
  const { dispatch, editRef } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleToggle = () => {
    dispatch({ type: TOGGLE_TASK, payload: task.id });
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditText(task.text);
    editRef.current = task.id; // Set the task id in the ref for the context
  };

  const handleSaveClick = () => {
    dispatch({ type: EDIT_TASK, payload: { id: task.id, text: editText } });
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            ref={editRef}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
