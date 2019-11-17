import './scss/main.scss';
import { DOM } from 'fmihel-browser-lib';
import React from 'react';
import ReacDOM from 'react-dom';
import { App } from 'components/App.jsx';

$(() => {
    ReacDOM.render(<App/>, DOM('#app'));
});
