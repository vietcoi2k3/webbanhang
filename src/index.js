import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import './index.css';
import App from './App';
import config from './config.ts'
import { AppProvider } from './AppContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ConfigProvider theme={config}> */}
    <AppProvider>
      <App />

    </AppProvider>
    {/* </ConfigProvider> */}
  </React.StrictMode>
);


