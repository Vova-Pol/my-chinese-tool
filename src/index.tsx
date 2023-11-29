import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter basename="/my-chinese-tool">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);
