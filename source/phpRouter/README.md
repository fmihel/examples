# Пример php роутера (расширенная версия)

Для работы локальной версии через webpack-dev-server необходимо установить/включить 
Apache модуль `headers_module`. Так же в папку со стартовым скриптом добавить настройки Apache

`.htaccess`
``` 
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
</IfModule>
```
В примере есть четыре конфигурации проекта

`build-dist-composer` и `build-dist-full` - окончательные сборки проекта,

`run-dev-server` - запуск сервера для отладки клиентской стороны (использует настройки webpack из `build-local` ), при этом обращение к серверной части идет через 
файлы php расположенные в исходной папке `/server/`.


Подключение php роутера осуществляем через composer:

``` composer require fmihel/php-router ```


Клиентская часть роутера:

``` npm i fmihel-php-router-client ```


