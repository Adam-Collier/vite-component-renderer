import React from 'react'
import ReactDOM from 'react-dom'
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import './index.css'
import App from './App'
import {Code} from "./components/Code"

import { Router, Link } from '@reach/router';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App path="/"/>
      <Code path="code"/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

const sheet = new ServerStyleSheet();
try {
  const html = renderToString(sheet.collectStyles(<App />));
  const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
  console.log(html, "this is the html");
  console.log(styleTags, "these are the style tags")
} catch (error) {
  // handle error
  console.error(error);
} finally {
  sheet.seal();
}
