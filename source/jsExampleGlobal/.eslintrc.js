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
    "globals": {
        "$": true,
        'log':true,
        'logr':true

        
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