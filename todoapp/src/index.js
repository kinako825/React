import ReactDOM from 'react-dom/client';  // ここを変更
import React from 'react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // createRoot を使用
root.render(<App />);  // render は createRoot で呼び出す
