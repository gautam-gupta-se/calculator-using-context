import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App'
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));

// Render your app inside the root
root.render(<App />);


