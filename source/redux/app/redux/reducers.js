import * as TYPES from './consts';

const init = {
    data: {
        name: 'noname',
        age: 0,
    },
    UI: {
        showData: false,
    },
};

const reducers = (state = init, action) => {
    if (action.type === TYPES.SET_DATA) {
        return {
            ...state,
            data: { ...state.data, ...action.payload },
        };
    }
    if (action.type === TYPES.SHOW_DATA) {
        return {
            ...state,
            UI: {
                ...state.UI,
                showData: action.payload,
            },
        };
    }


    return state;
};

export default reducers;
