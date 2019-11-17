# jsAlias
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













