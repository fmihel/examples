# Manual

Различные примеры и варианты настройки для проектов.
Направления разбиты по веткам, поэтому нет главных и второстепенных веток.
Все ветки отражают определенное направление, к примеру
ts - typescript, js - javascript и т.д.
Центральная ветка (master) будет включать в себя стартовые настройки для проектов или
важные ключевые моменты (ну так предполагается :)  
Установка manual -  
```git clone https://github.com/fmihel/manual.git```  
Далее, для перехода на нужный уровень используйте tag, который указывается в конце каждого раздела.  
[полная версия документа на gist](https://gist.github.com/fmihel/118322511a6c607b1ad4a01769af6980)
 
---
*  [Простой web-server](#express) [express]
*  [Сборка webpack](#webpack) [webpack]
*  [Подключение сторонних модулей на примере jQuery](#jquery) [jquery]
*  [Автоматизация создания html и д.р](#webpackHtml) [webpackHtml]
*  [Рефакторинг (eslint)](#eslint) [eslint]
*  [Пример модулей JS](#jsExampleModule) [jsExampleModule]

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





