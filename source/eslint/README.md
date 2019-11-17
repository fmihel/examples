# eslint
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







