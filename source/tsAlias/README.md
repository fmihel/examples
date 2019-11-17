# tsAlias
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