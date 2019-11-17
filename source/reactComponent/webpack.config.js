const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './app/client/index.js',
    output: {
        path: path.resolve(__dirname, './app/public/'),
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    mode: 'development',
    plugins: [
        new CleanWebpackPlugin(['./app/public/']),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new HtmlWebPackPlugin({
            template: './app/client/index.html',
            filename: './index.html',
        }),
        new CopyWebpackPlugin([
            { from: './app/media/favicon.ico' },
            // { from: './app/client/style.css' },
        ]),
    ],
};
