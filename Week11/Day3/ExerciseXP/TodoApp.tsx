// TodoApp.tsx
import React, { useState } from 'react';
import List from './List';
import { Todo } from './types';

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [nextId, setNextId] = useState<number>(1);

    const addTodo = () => {
        const newTodo: Todo = {
            id: nextId,
            text: `Todo ${nextId}`
        };
        setTodos([...todos, newTodo]);
        setNextId(nextId + 1);
    };

    return (
        <div>
            <button onClick={addTodo}>Add Todo</button>
            <List
                items={todos}
                renderItem={(todo) => (
                    <span>{todo.text}</span>
                )}
            />
        </div>
    );
};

export default TodoApp;
