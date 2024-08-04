import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style.css'; // Import global styles
import App from './App';

// Create a root.
const root = createRoot(document.getElementById('root'));

// Render the App component within BrowserRouter.
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
