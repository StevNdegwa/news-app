import React from 'react';
import ReactDOM from 'react-dom';

import "./index.scss";

import App from './app/App';

ReactDOM.hydrate(<App />,
  document.getElementById('root')
);
