import * as TYPES from './consts';

const init = {
    UI: {
        showPanel: false,
    },
    user: {

    },
};

function reducers(state = init, action) {
    if (action.type === TYPES.SHOW_PANEL) {
        return {
            ...state,
            UI: {
                ...state.UI,
                showPanel: action.payload,
            },
        };
    }

    if (action.type === TYPES.GET_USER) {
        return {
            ...state,
            user: {
                ...state.user,
                ...action.payload,
            },
        };
    }

    return state;
}

export default reducers;
