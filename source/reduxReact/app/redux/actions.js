import * as TYPES from './consts';
import store from './store';

const showPanel = (bool) => ({
    type: TYPES.SHOW_PANEL,
    payload: bool,
});

const getUser = (user) => ({
    type: TYPES.GET_USER,
    payload: user,
});

export const actShowPanel = (bool) => store.dispatch(showPanel(bool));
export const actGetUser = (user) => store.dispatch(getUser(user));
