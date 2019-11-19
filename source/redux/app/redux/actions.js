import * as TYPES from './consts';
import store from './store';

const setData = (data) => ({
    type: TYPES.SET_DATA,
    payload: data,
});
export const actSetData = (data) => store.dispatch(setData(data));

const showData = (bool) => ({
    type: TYPES.SHOW_DATA,
    payload: bool,
});
export const actShowData = (bool) => store.dispatch(showData(bool));
