// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

export default combineReducers({
  todos: todoReducer,
});
