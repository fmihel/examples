/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const { PageReloadServer } = require('page-reload-webpack-plugin');

const config = require('./config');

const app = express();
PageReloadServer.init({ app, port: config.port });

app.use(config.paths, express.static(config.public));

app.get('/', (from, to) => {
    to.send('Loading...');
});

app.listen(config.port, (err) => {
    if (err) { return console.error(err); }
    console.log(`server start on port: ${config.port}`);
    console.log(`use http://localhost:${config.port}/   or  http://127.0.0.1:${config.port}/ `);
    return undefined;
});

module.exports = app;