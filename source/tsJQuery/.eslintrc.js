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
    "parser": "typescript-eslint-parser",
    "plugins": [
        "react",
        "typescript"
    ],
    "globals": {
        "$": true
        
    },
    "rules": {
        "typescript/rule-name": "error",
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