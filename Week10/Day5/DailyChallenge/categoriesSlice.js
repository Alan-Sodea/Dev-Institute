// src/features/categoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    editCategory: (state, action) => {
      const { id, name } = action.payload;
      const existingCategory = state.find(category => category.id === id);
      if (existingCategory) {
        existingCategory.name = name;
      }
    },
    deleteCategory: (state, action) => {
      return state.filter(category => category.id !== action.payload);
    },
  },
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
