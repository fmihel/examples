# Examples
Сборник примеров настроект проектов и решений для веб разработки
Примеры располагаются по мере усложнения информации и наращивания используемых
технологий, поэтому могут быть успользованы в качестве обучающего материала.

*  `/express` [Простой web-server](#express) 
*  `/webpack` [Сборка webpack](#webpack)
*  `/jquery` [Подключение сторонних модулей на примере jQuery](#jquery)
*  `/webpackHtml`[Автоматизация создания html и д.р](#webpackHtml)
*  `/eslint` [Рефакторинг (eslint)](#eslint)
*  `/jsExampleModule` [Пример модулей JS](#jsExampleModule)
*  `/jsExampleGlobal`[Пример глобальных ф-ций](#jsExampleGlobal)
*  `/jsAlias` [Алиас путей](#jsAlias)
*  `/tsSetup` [Typescript: настройка](#tsSetup)
*  `/tsJQuery` [Typescript: используем jQuery](#tsJQuery)
*  `/tsESLint` [Typescript: настройка ESLint](#tsESLint)
*  `/tsAlias` [Typescript: добавление алиса(короткого имени)](#tsAlias)
*  `/tsClass` [Typescript: определение класса](#tsClass)
*  `/tsGeneric` [Typescript: обобщения (generics)](#tsGeneric)
*  `/tsDecor` [Typescript: декораторы](#tsDecor)
*  `/reactSetup` [React: стартовый проект](#reactSetup) 
*  `/reactComponent` [React: пример компонентов](#reactComponent) 
*  `/phpServer` [Php: пример использования Php/Apache в качестве сервера](#phpServer)

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
В `webpack.config.js` добавляем плагин  
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

---
### reactComponent
Небольшой пример приложения с использованием компонетов react.


---
### phpServer
Пример использования `php/Apache` в качестве сервера. 
Для этого в папке ***server/router*** реализован небольшой маршрутизатор, 
для возможности обмена по ajax. Вся клиентская часть реализуется с помощью `react` и `react-router`.
Так же, для корректной работы react-router требуется настройка Apache.

1. В `webpack.config.js` прописываем глобальные переменные
```javascript
const BASEPATH_ROUTER = '/app/public/';    // папка в которую бандлится проект  
const PHP_ROUTER = '../source/index.php';  // папка расположения начального узла роутора, относительно папки в которую бандлится проект.
```
2. Настраиваем копирование в `BASEPATH_ROUTER` файла `.htaccess` , с заменой в нем переменной `{$BASEPATH_ROUTER}`. 
Это укажет `Apache` правильно отвечать на запросы уровнем ниже `url` приложения. Грубо говоря, будет всегда возвращаться `index.html` - это важно для правильной работы `react` маршрутизации.

3. В файле `index.html`, так же заменяем `<base href="{$BASEPATH_ROUTER}" />` - необходимо для правильной маршрутизации браузера, в случае многоуровнего маршрута.

4. В `index.js` подключаем клиентскую часть роутера , и настраиваем ее 
```javascript

import router from 'server/router';
router.host = PHP_ROUTER;

```
Теперь все запросы будут идти через начальный файл, указанный в `PHP_ROUTER` `index.php`.  

5. Формирование запроса от клиента  
```javascript
router.ajax({
    id:'ID_XXX', // идентификатор запроса
    data:{...}  //  данные запроса
}).then(data=>{
    // data - содержат данные непосредственно возвращаемые сервером
})
.catch(e=>{
    // e.res - код ошибки (-2 ошибка парсинга, -1 - ошибка ajax, 0 - ошибка из скрипта)
    // e.msg - сообщение
    // e.data - дополнительные данные    
})
```
6. Обработчик запросов на стороне сервера. 
```php
class MyRoute extends Route{
    public function request(){
        if ($this->is('ID_XXX')){

            $data = array(...); // ajhvbhetv данные для ответа 
            return $this->result($data);
        }
    }
}
```    