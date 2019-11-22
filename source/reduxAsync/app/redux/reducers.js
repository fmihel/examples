import * as TYPES from './consts';

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


export default reducers;
