import './template/define.css';
import './template/main.css';
import { DOM } from 'fmihel-lib';
import React from 'react';
import ReacDOM from 'react-dom';
import { App } from 'components/App.jsx';

$(() => {
    ReacDOM.render(<App/>, DOM('#page'));
});
