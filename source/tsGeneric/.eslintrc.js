module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends":[
        "airbnb/base",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "project": "./tsconfig.json"

    },
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "globals": {
        "$": true
        
    },
    "rules": {
        //"@typescript-eslint/rule-name": "error",
        '@typescript-eslint/interface-name-prefix':'off',
        "@typescript-eslint/no-explicit-any":"off",
        'no-console': 'off',
        "import/no-unresolved":'off',
        'no-bitwise':'off',
        'no-plusplus':'off',
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