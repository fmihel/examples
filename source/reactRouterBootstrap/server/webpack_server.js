/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./config');

const app = express();
const webpackConfig = require('../webpack.config.js');

const compiler = webpack(webpackConfig);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(config.paths, webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
}));

// Serve the files on port 3000.
app.listen(config.port, () => {
    console.log('Example app listening on port 3000!\n');
});
