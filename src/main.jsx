import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Code} from "./components/Code"

import { Router } from '@reach/router';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App path="/"/>
      <Code path="code"/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
