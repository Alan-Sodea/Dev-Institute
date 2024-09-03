import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BookList from './BookList';

const App = () => {
  return (
    <Provider store={store}>
      <BookList />
    </Provider>
  );
};

export default App;
