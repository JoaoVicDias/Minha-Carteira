import React from 'react';
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import GlobalStyles from './Styles/GlobalStyles'

import Routes from './Routes'

import useTheme from './Hooks/ThemeContext';

import './app.css'

function App() {
  const { theme } = useTheme()
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={6000}
        closeOnClick
        pauseOnHover />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
