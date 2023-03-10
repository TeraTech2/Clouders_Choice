import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap-icons/font/bootstrap-icons.css";
import Theme from './context/Theme';
import serviceWorker from './swDev';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Theme><App /></Theme>);
 
// serviceWorker();