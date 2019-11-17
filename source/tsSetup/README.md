# tsSetup
Настройка для Typescript:  
``` npm i typescript ts-loader ```  
В `webpack.config.js` прописываем модуль для загрузки ts
```javascript 
module.exports = {
    ...
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    ...
};
```  
Добавляем конфиг `tsconfig.json`
```javascript 
{
    "compilerOptions": {
      "outDir": "./app/public/",
      "noImplicitAny": true,
      "module": "es6",
      "target": "es5",
      "jsx": "react",
      "allowJs": true
    }
}
```  
Для eslint ставим plugin поддержки синтаксиса  
```npm i @typescript-eslint/eslint-plugin -D ```  
В конфиг `.eslintrc.js` приписать
```javascript 
module.exports = {
    ...
    "parser": "typescript-eslint-parser",
    "plugins": [
        ...
        "typescript"
        ...
    ],
    "rules": {
        ....
        "typescript/rule-name": "error",
        ...
    }
};

```  
















