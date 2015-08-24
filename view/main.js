import React from 'react';
import App from './app';
import History from 'react-router/lib/BrowserHistory';
require('./styles/yocal.css');
import './styles/main.styl';
import './styles/dice.css';


const history = new History();

React.render(
  <App history={history}/>,
  document.getElementById('app')
);
