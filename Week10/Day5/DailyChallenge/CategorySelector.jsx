// src/components/CategorySelector.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategoryById } from '../features/categoriesSlice';

const CategorySelector = ({ onSelectCategory }) => {
  const categories = useSelector(state => state.categories);

  return (
    <div>
      <h2>Select Category</h2>
      <select onChange={e => onSelectCategory(e.target.value)}>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
