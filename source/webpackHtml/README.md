# webpackHtml
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
