# Менеджер состояний redux

Состоит из трех состоявляющих.
1. Хранитель состояния (state)
2. Действие (action)
3. Редюсер (reducer) механизм преобразующий действие в данные состояния

Принципиальная схема работы redux

[ user ] -> call [ action ] -> call [ reducer ] - >change [ state ] 

Пользователь совершает действие (вызвав ф-цию действия), которое в свою чередь
через механизи редюсера изменяет состояние. У состояни есть механизм прослушивания
subscribe изменения, через которое идет воздействие на приложение.

### Пример описания 

`action`
```javascript
const SET_USER = "SET_USER";
const setUser = (user) => (
    { 
        type:SET_USER,
        payload:user
    }
);
const actSetUser(user)=>(store.dispatch(setUser(user)));

```

`reducer`
```javascript
// начальная структура данных и инициализацией
const init = {
    user:{
        name:"noname",
        age:0,
    }
}
const reducer=(state = init ,action)=>{
    if (action.type === SET_USER)
        return {
            ...state,
            user:{
                ...state.user,
                action.payload
            }
        }
    return 
}

```

`store`
```javascript
import { createStore } from "redux";
const store = createStore(reducer);

```

### Использование
```javascript
// включение прослушки
store.subscribe(()=>{
    // получение текущего состояния    
    const state = store.getState();
    // TO DO 
    // выполням действия с приложением связанные с изменением состояния

}); 
```













