import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { ThemeContextProvider } from './Hooks/ThemeContext'
import { UserContextProvider } from './Hooks/UserContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

