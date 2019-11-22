# reduxAsync

Асинхронный redux всего лишь несколько последовательно выполненных действий.
Минимально два. Первое - до запуска асинхронного процесса, второе после. Оптимально - три действия.
Первое - начало асинхронного процесса, второе - после процесса, если  он завершился успешно. 
Третье - после процесса, если он выполнен с ошибкой.
Для последовательно диспатчеризирования действий используется модуль промежуточной обработки 
redux `redux-thunk`.

### пример

`action`
```javascript
export const GET_INFO       = 'GET_INFO';
export const GET_INFO_ERR   = 'GET_INFO_ERR';
export const GET_INFO_OK    = 'GET_INFO_OK';

const getInfo = (bool) => (dispatch) => {
    // вызов до запуска асинхронного процесса
    dispatch({
        type: TYPES.GET_INFO,
    });

    // запуск асинхронного процесса
    setTimeout(() => {
        const res =  bool;

        if (!res) {
            // действие в результать ошибки
            dispatch({
                type: TYPES.GET_INFO_ERR,
                payload: 'generate error',
            });
        } else {
            // действие если все закончилось успешно
            dispatch({
                type: TYPES.GET_INFO_OK,
                payload: {
                    data: 'ok',
                    name: ut.random_str(10),
                },
            });
        }
    }, 2000);
};

export const actGetInfo = (info) => store.dispatch(getInfo(info));


```

`reducer`
```javascript

// начальная структура данных и инициализацией
const init = {
    state: 'wait',
    res: true,
    info: {
        data: '...',
        name: '...',
    },
};
function reducers(store = init, action) {
    if (action.type === TYPES.GET_INFO) {
        return {
            ...store,
            state: 'loading...', 
            res: undefined,
        };
    }

    if (action.type === TYPES.GET_INFO_OK) {
        return {
            ...store,
            state: 'wait',
            res: true,
            info: {
                ...store.info,
                ...action.payload,
            },
        };
    }

    if (action.type === TYPES.GET_INFO_ERR) {
        return {
            ...store,
            state: 'wait',
            res: false,
        };
    }

    return store;
}

```

`store` подключение промежуточного слоя и обработчика для асинхрона
```javascript

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


export default createStore(reducers, applyMiddleware(thunk));
```

```
