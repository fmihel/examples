# jsExampleGlobal
Для добавления собственных глобальных переменных в проек необходимо
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









