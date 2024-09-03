import TodoList from './todo.js';

const todoList = new TodoList();

todoList.addTask('Buy groceries');
todoList.addTask('Read a book');
todoList.addTask('Write code');

todoList.markTaskAsComplete('Read a book');

console.log('Tasks:\n', todoList.listTasks());
