const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        bjs: './app/client/index.js',
        // bts: './app/client/index.ts',
    },
    output: {
        path: path.resolve(__dirname, './app/public/'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            utils: path.resolve(__dirname, './app/addition/utils/'),
        },
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
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
        ]),
    ],
};
