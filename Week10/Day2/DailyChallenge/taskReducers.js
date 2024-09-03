import { ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/taskActions';

const initialState = {};

const taskReducer = (state = initialState, action) => {
  const { day, task, taskId, updatedTask } = action.payload || {};

  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        [day]: [...(state[day] || []), { ...task, id: Date.now() }],
      };
    case EDIT_TASK:
      return {
        ...state,
        [day]: state[day].map(t => (t.id === taskId ? { ...t, ...updatedTask } : t)),
      };
    case DELETE_TASK:
      return {
        ...state,
        [day]: state[day].filter(t => t.id !== taskId),
      };
    default:
      return state;
  }
};

export default taskReducer;
