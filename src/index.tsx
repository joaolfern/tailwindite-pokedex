import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { AppLoadingContextProvider } from './contexts/AppLoadingContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppLoadingContextProvider>
        <App />
      </AppLoadingContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
