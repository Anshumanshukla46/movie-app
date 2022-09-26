// package import at top
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';


// file import 
import './index.css';
import App from './components/App'; // changed app.js location

import movies from './reducers';

// passed reducer
const store = createStore(movies);
console.log("store", store);

// empty as in reducer we have a default argument for state be to [] if not present

// getState => get the STATE

console.log("BEFORE STATE ", store.getState());

store.dispatch({
  type: 'ADD_MOVIES',
  movies: [{ name: ' Superman ' }]
});

console.log("AFTER STATE ", store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);