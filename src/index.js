import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
