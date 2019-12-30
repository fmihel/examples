import './template/define.css';
import './template/main.css';
import { DOM } from 'fmihel-browser-lib';
import React from 'react';
import ReacDOM from 'react-dom';
import { App } from 'components/App.jsx';
import './router.config.js';

$(() => {
    ReacDOM.render(<App/>, DOM('#page'));
});
