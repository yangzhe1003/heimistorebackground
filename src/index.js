import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, HashRouter } from 'react-router-dom';

// ReactDOM.render(
//     <App />, document.getElementById('root')
// );
ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root')
);
registerServiceWorker();
