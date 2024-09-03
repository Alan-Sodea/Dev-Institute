// src/features/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, completed } = action.payload;
      const existingTask = state.find(task => task.id === id);
      if (existingTask) {
        existingTask.title = title;
        existingTask.completed = completed;
      }
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    updateTaskProgress: (state, action) => {
      const { id, completed } = action.payload;
      const existingTask = state.find(task => task.id === id);
      if (existingTask) {
        existingTask.completed = completed;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, updateTaskProgress } = tasksSlice.actions;
export default tasksSlice.reducer;
