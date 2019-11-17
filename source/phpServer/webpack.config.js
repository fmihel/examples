const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');

const BASEPATH_ROUTER = '/app/public/';
const PHP_ROUTER = '../source/index.php';

module.exports = {
    entry: './app/source/index.js',
    output: {
        path: path.resolve(__dirname, '.'+BASEPATH_ROUTER),
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
    
    resolve: {
        alias: {
            server: path.resolve(__dirname, 'app/server/'),
        },
    },

    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            PHP_ROUTER: JSON.stringify(PHP_ROUTER),
            BASEPATH_ROUTER: JSON.stringify(BASEPATH_ROUTER),
        }),
        new ReplaceInFileWebpackPlugin([{
            
            dir: BASEPATH_ROUTER.substring(1),
            files: ['.htaccess', 'index.html'],
            rules: [{
                search: '{$BASEPATH_ROUTER}',
                replace: BASEPATH_ROUTER,
            }],
        }]),

        new CleanWebpackPlugin(['.'+BASEPATH_ROUTER]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new HtmlWebPackPlugin({
            template: './app/source/index.html',
            filename: './index.html',
        }),
        new CopyWebpackPlugin([
            { from: './app/media/favicon.ico' },
            { from: './app/server/router/.htaccess' },
        ]),
    ],
};
