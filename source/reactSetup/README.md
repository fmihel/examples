# Manual

Различные примеры и варианты настройки для проектов.
Направления разбиты по веткам, поэтому нет главных и второстепенных веток.
Все ветки отражают определенное направление, к примеру
ts - typescript, js - javascript и т.д.
Центральная ветка (master) будет включать в себя стартовые настройки для проектов или
важные ключевые моменты (ну так предполагается :)  
Установка manual -  
```git clone https://github.com/fmihel/manual.git```  
Далее, для перехода на нужный уровень используйте tag, который указывается в конце каждого раздела. К примеру:  
```
git go tsAlias
или   
git go jquery

```

---
*  [Простой web-server](#express) [express]
*  [Сборка webpack](#webpack) [webpack]
*  [Подключение сторонних модулей на примере jQuery](#jquery) [jquery]
*  [Автоматизация создания html и д.р](#webpackHtml) [webpackHtml]
*  [Рефакторинг (eslint)](#eslint) [eslint]
*  [Пример модулей JS](#jsExampleModule) [jsExampleModule]
*  [Пример глобальных ф-ций](#jsExampleGlobal) [jsExampleGlobal]
*  [Алиас путей](#jsAlias) [jsAlias]
*  [Typescript: настройка](#tsSetup) [tsSetup]
*  [Typescript: используем jQuery](#tsJQuery) [tsJQuery]
*  [Typescript: настройка ESLint](#tsESLint) [tsESLint]
*  [Typescript: добавление алиса(короткого имени)](#tsAlias) [tsAlias]
*  [Typescript: определение класса](#tsClass) [tsClass]
*  [Typescript: обобщения (generics)](#tsGeneric) [tsGeneric]
*  [Typescript: декораторы](#tsDecor) [tsDecor]
*  [React: стартовый проект](#reactSetup) [reactSetup]
 
---
### express 
Простой web сервер на node. Инициализация проекта  
```npm init```  
Добавляем express  
```npm i express -D```  
Структуру проекта см. в исходнике.  

---
### webpack
Подключаем webpack и настраеваем сборку клиентской части.  
```npm i webpack webpack-cli -D ```  
Сборка реализует модульную концепцию js-модулей клиентской части.  

---
### jquery
Загружаем модуль  
```npm i jquery -S```   
В `webpack.config.js` подключаем и указываем, что имя jQuery и $ будет использоваться 
глобально для всех файлов  
```javascript 
module.exports = {
    ...
    plugins: [
        new webpack.ProvidePlugin({
            $:      'jquery',
            jQuery: 'jquery',
        }),
    ],
    ...
};
```

---
### webpackHtml
Модуль позволяет создавать index.html в процессе сборки, используя шаблон и собранные 
js-модули  
Загружаем модуль  
```npm html-webpack-plugin -D``` 
В `webpack.config.js` добавляе плагин  
```javascript 
module.exports = {
    ...
    plugins: [
        ...
        new HtmlWebPackPlugin({
            template: './app/client/index.html',
            filename: './index.html',
        }),
        ...    
    ],
    ...
};
```  
Так же, можно добавить плагин `copy-webpack-plugin`  
```npm i copy-webpack-plugin -D```  
Который позволяет копировать в папку сборки необходимые файлы или каталоги
```javascript 
module.exports = {
    ...
    plugins: [
        ...
        new CopyWebpackPlugin([
            { from: './app/media/favicon.ico' },
        ])
        ...    
    ],
    ...
};
```  
---
### eslint
Плагин необходим для проверки синтаксиса кода, а также приведения 
кода к единому стилевому виду. Рассматриваю настройки для VSCode.  
Установка:  
```npm i eslint -D ```  
Дополнительные настройки и плагины  
```npm i eslint-config-airbnb eslint-plugin-import eslint-plugin-react -D```  
В VSCode необходимо подключить расширение ESLint от Dirk Baeumer  
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint  
Создать файлы конфигураций:  `.eslintrc.js`  и  `.eslintignore`.  

Обратите **внимание** на секцию, *`globals`* в `.eslintrc.js`.  В ней дополнительно указывается,
что jquery является глобальной библиотекой.

---
### jsExampleModule  
Примеры модулей в стиле CommonJS и ES6  

---
### jsExampleGlobal
Для добавления собственных глобальных переменных в проект необходимо
в `webpack.config.js` указать alias  
```javascript 
module.exports = {
    ...
    resolve: {
        alias: {
            logr: path.resolve(__dirname, './app/client/modules/logr'),
            log: path.resolve(__dirname, './app/client/modules/log'),
        },
    },
    ...
};
```  
Прописать имена в провайдере
```javascript 
module.exports = {
    ...
    plugins: [
        ...
        new webpack.ProvidePlugin({
            ...
            log: 'log',
            logr: 'logr',
            ...

        }),
        ...
    ],
    ...
};
```  
Так же прописать имена в `.eslintrc.js`  
```javascript 
module.exports = {
    ...
    "globals": {
        ...
        'log':true,
        'logr':true
        ..
    },
    ...
};
```
---
### jsAlias
Для создания алиаса пути необходимо прописать его 
в `webpack.config.js` и указать маршрут к необходимому каталогу
```javascript 
module.exports = {
    ...
    resolve: {
        alias: {
            ...
            Utils: path.resolve(__dirname, 'app/client/modules/utils/'),
            ...
        },
    },
    ...
};
```  
Далее можно использоавть короткое имя в файлах js
```javascript 
import log from 'Utils/log';

$(() => {
    log('global function use ES6 syn');
});
``` 
Что бы не конфликтовал eslint, добавить плагин для eslint  
```npm i eslint-import-resolver-webpack -D```   
После чего прописать в *`.eslintrc.js`* маршрут к конфигурации webpack  
```javascript 
module.exports = {
    ...
    'settings': { 
        "import/resolver": { 
            'webpack': { 
                'config': path.resolve("webpack.config.js"), 
            }, 
        }, 
    },    
    ...
};
```  
---
### tsSetup
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
---
### tsJQuery
Для использования сторонней библиотеке в среде с ts, необходимо подключить 
библиотеку типов  
```npm i @types/jquery -D ```   

---
### tsESLint
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
---
### tsAlias  
Создание алиасов похоже на создание для javascript (см [jsAlias](#jsAlias)), с небольшими дополнениями для typescript.
Прописываем путь в `webpack.config.js` и указываем маршрут к необходимому каталогу

```javascript 
module.exports = {
    ...
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // обязательно указать расширения 
        alias: {
            ...
            utils: path.resolve(__dirname, 'app/addition/utils/'),  // utils - имя алиаса и оазрешенное
            ...
        },
    },
    ...
};
```
Прописываем путь в `tsconfig.json`  
```
{
    "compilerOptions": {
        ...
        "baseUrl": ".",  
        "paths": {
            "utils/*": [
                "app/addition/utils/*"
            ]
        }
        ...
    }
  }
```
Чтобы ESLint не ругался, отключаем правило
```
"rules": {
    ...
    "import/no-unresolved":'off',
    ...

```
Теперь можно использовать алиасы в ts
```javascript
//import log from 'addition/utils/log';
import log from 'utils/log';
log(`use alias `);

```
---
### tsClass
См. исходники

---
### tsGeneric
В исходниках примеры создания классов, пересечений, интерфейсов, объединений и обобощений.
Все разбито по файлам.

---
### tsDecor
Примеры создания декораторов

---
### reactSetup
Подключаем к проекту react.  
```npm i react react-dom -S```  

Дополнительно подключаем загрузчик babel  
```npm i babel-loader -S```  

Прописываем его как модуль 
```javascript
module.exports = {
    ...
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    ...
};
```

Добавляем пресеты  
``` npm i @babel/preset-env @babel/preset-react -D ```   

Прописываем их в файле конфигураци *.babelrc*  
```javascript
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Для ESLint ставим plugin  
```npm i babel-eslint -D ```  

Добавляем в настройки *.eslintrc.js*  
```javascript
module.exports = {
    ...
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
    "rules": {
        ...
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        ...
    }
    ...
};
```







