import React, { createContext, useReducer, useRef } from 'react';

// Initial state
const initialState = {
  tasks: [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Task Manager', completed: false },
  ],
  filter: 'all', // all, completed, active
};

// Actions
const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const SET_FILTER = 'SET_FILTER';

// Reducer function
const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, text: action.payload.text } : task
        ),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

// Create context
const TaskContext = createContext();

// Context provider component
const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const editRef = useRef(null);

  return (
    <TaskContext.Provider value={{ state, dispatch, editRef }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider, TaskContext, ADD_TASK, EDIT_TASK, TOGGLE_TASK, SET_FILTER };
