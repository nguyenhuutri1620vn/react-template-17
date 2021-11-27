import React from 'react';
import ReactDOM from 'react-dom';

import App from '#root/app/app';
import reportWebVitals from './reportWebVitals';
import AppProvider from '#root/app/providers';

import 'antd/dist/antd.variable.min.css';
import '#root/styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();