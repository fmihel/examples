import router from 'server/router';
import React from 'react';
import ReactDOM from 'react-dom';
import Test from './test/test.jsx';

router.host = PHP_ROUTER;
ReactDOM.render(<Test/>, $('#root')[0]);
