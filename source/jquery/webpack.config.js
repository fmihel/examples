const path = require('path');
const webpack = require('webpack');
const conf = require('./app/server/config');

module.exports = {
    entry: './app/client/index.js',
    
    output: {
        path: path.resolve(__dirname, './app/public/'),
        filename: 'bundle.js',
    },
    mode: 'development',
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
};
