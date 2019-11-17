# tsESLint
Настройка ESLint для typescript.  
```npm i @typescript-eslint/parser @typescript-eslint/eslint-plugin -D```  
```javascript 
module.exports = {
    ...
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

    "parser": "@typescript-eslint/parser",
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        ...
        // template for rules
        //"@typescript-eslint/rule-name": "error",
        ...
    }
    ...
};


```  
