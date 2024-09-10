import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { menu } from './data/data.js'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App headerMenu={menu} />
);
