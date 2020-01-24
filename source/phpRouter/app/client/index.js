import './template/define.css';
import './template/main.css';
import './router.config.js';
import { DOM } from 'fmihel-browser-lib';
import React from 'react';
import ReacDOM from 'react-dom';
import { App } from './App.jsx';

$(() => {
    ReacDOM.render(<App/>, DOM('#page'));
});
