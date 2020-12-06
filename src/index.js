import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';


// material ui setup
import theme from './utils/theme'
import { ThemeProvider } from '@material-ui/core'




ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



// #E4332D
// #ED1B24
// #231F20
// #2B2B2B
