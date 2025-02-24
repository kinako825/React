//App.jsx
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import List from './List';

// props
// 親コンポーネントから子コンポーネントに値を渡す方法
// <コンポーネント名 props名=値 />

// state
// アプリケーションの見た目の表示に関係する変数

const App = () => {
    const [todos, setTodos] = useState([
        { content: '掃除をする', id: nanoid() },
        { content: '洗濯をする', id: nanoid() },
        { content: '料理をする', id: nanoid() },
    ]);
    const addTodo = (text) => {
        // スプレッド構文
        setTodos([...todos, { content: text, id: nanoid() }]);
    };
    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };
    return (
        <>
            <h1>Todo App</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo} />
        </>
    );
};

export default App;