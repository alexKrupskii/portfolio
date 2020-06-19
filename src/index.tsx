import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Redirect} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter >
        <Route exact path="/">
            <Redirect to="/home" />
        </Route>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
