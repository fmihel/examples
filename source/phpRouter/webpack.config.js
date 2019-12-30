const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { defArg } = require('fmihel-server-lib');
const ReplaceBefore = require('webpack-plugin-replace');
const ReplaceAfter = require('replace-in-file-webpack-plugin');

const isDevelopment = defArg('dev');

const CLIENT_PATH = 'client';
const SOURCE_PATH = `./${CLIENT_PATH}/`;
const PUBLIC_PATH = isDevelopment ? './public/' : './dist/';
const TEMPLATE_PATH = `${SOURCE_PATH}template/`;
const MEDIA_PATH = `${SOURCE_PATH}media/`;
const PHP_ROUTER_ADDR = isDevelopment ? 'http://work/examples/source/phpRouter/public/' : '';
const PHP_VENDOR_REPLACE = { from: '/../vendor/autoload.php', to: '/vendor/autoload.php' };

const PORT = 3000;

const CopyWebpackPluginList = [
    { from: `${MEDIA_PATH}favicon.ico` },
];
if (isDevelopment) {
    // CopyWebpackPluginList.push({ from: 'server' });
} else {
    CopyWebpackPluginList.push({ from: 'server', ignore: ['router.dat'] });
    if (defArg('full')) {
        CopyWebpackPluginList.push({ from: 'vendor', to: 'vendor' });
    } else {
        CopyWebpackPluginList.push({ from: 'composer.lock' });
        CopyWebpackPluginList.push({ from: 'composer.json' });
    }
}
module.exports = {
    entry: `${SOURCE_PATH}index.js`,
    output: {
        path: path.resolve(__dirname, PUBLIC_PATH),
        filename: '[name].[contenthash].js',
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'client/source/components/'),
        },
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
    mode: (isDevelopment ? 'development' : 'production'),
    devtool: (isDevelopment ? 'inline-source-map' : ''),
    devServer: {
        contentBase: PUBLIC_PATH,
        port: PORT,
        liveReload: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new HtmlWebPackPlugin({
            template: `${TEMPLATE_PATH}index.html`,
            filename: './index.html',
        }),
        new CopyWebpackPlugin(CopyWebpackPluginList),
        new ReplaceBefore({

            exclude: /node_modules/,
            include: 'router.config.js',
            values: {
                PHP_ROUTER_ADDR: isDevelopment ? PHP_ROUTER_ADDR : '',

            },

        }),
        new ReplaceAfter([{
            dir: PUBLIC_PATH.substring(2),
            files: ['index.php'],
            rules: [{
                search: PHP_VENDOR_REPLACE.from,
                replace: PHP_VENDOR_REPLACE.to,
            }],
        }]),
    ],
};
