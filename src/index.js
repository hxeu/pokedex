import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import App from './App';

const basename = process.env.PUBLIC_URL;

ReactDOM.render(
  <Router basename={basename}>
    <App />
  </Router>,
  document.getElementById('root')
);