import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './Store';
import Accordion from './state-drills/Accordion';

ReactDOM.render(<Accordion sections = {store.sections} />, document.getElementById('root'));

