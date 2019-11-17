const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app/client/index.js',
    output: {
        path: path.resolve(__dirname, './app/public/'),
        filename: '[name].js',
    },
    mode: 'development',
    resolve: {
        alias: {
            logr: path.resolve(__dirname, './app/client/modules/logr'),
            log: path.resolve(__dirname, './app/client/modules/log'),
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            log: 'log',
            logr: 'logr',

        }),
        new HtmlWebPackPlugin({
            template: './app/client/index.html',
            filename: './index.html',
        }),
        new CopyWebpackPlugin([
            { from: './app/media/favicon.ico' },
        ]),
    ],
};
