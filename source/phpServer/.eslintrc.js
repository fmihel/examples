const path = require('path');
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        
        "es6": true
    },
    "extends": "airbnb/base",
    "parser": "babel-eslint",
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
    "settings": { 
        "import/resolver": { 
            "webpack": { 
                "config": path.resolve("webpack.config.js")
            }
        } 
    },    

    "globals": {
        "$": true,
        "PHP_ROUTER": true,
        "BASEPATH_ROUTER":true
        
    },
    "rules": {
        "no-console": "off",
        "no-bitwise":"off",
        "class-methods-use-this":"off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "eqeqeq":"warn",
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
}