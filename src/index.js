import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainContainer from '../src/components/MainContainer/MainContainer'
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<MainContainer />, document.getElementById('root'));
registerServiceWorker();
