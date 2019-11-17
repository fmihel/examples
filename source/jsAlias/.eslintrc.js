const path = require('path');
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    //"extends": "eslint:recommended",
    "extends": "airbnb/base",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    'settings': { 
        "import/resolver": { 
            'webpack': { 
                'config': path.resolve("webpack.config.js"), 
            }, 
        }, 
    },    
    "globals": {
        "$": true,
    },
    "rules": {
        'no-console': 'off',
        'no-bitwise':'off',
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};