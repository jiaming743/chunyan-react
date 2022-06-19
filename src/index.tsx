import React from 'react';
import ReactDOM from 'react-dom/client';
import { withPrefix } from '@/utils/logger';
import { App } from './App';
import { reportWebVitals } from './reportWebVitals';

// eslint-disable-next-line
import './index.less';

const logger = withPrefix('common');

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals().catch((error) => {
  logger('reportWebVitals error', error);
});
