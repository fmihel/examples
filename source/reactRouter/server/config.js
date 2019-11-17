// eslint-disable-next-line import/no-extraneous-dependencies
const { routerPaths } = require('fmihel-server-lib');

const config = {
    public: './public/',
    port: process.env.PORT | 3000,
    paths: routerPaths([
        '/page2',
        '/page1',
        '/',

    ]),
};

module.exports = config;
