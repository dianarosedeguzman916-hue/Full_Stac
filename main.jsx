import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assumes you have an App.jsx component in the same src folder

// Render the React app into the root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);