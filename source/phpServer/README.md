# phpServer
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













