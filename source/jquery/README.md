# jquery
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