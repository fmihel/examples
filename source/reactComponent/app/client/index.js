import './define.css';
import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../components/page/page.jsx';
import Dialog from '../components/dialog/dialog.jsx';


const dialog = ReactDOM.render(<Dialog />, document.getElementById('modal'));
ReactDOM.render(<Page onClick={() => { dialog.show(); }} />, document.getElementById('wp'));
