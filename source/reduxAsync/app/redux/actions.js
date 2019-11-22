/* eslint-disable import/prefer-default-export */
import { ut } from 'fmihel-browser-lib';
import * as TYPES from './consts';
import store from './store';

const getInfo = (bool = undefined) => (dispatch) => {
    dispatch({
        type: TYPES.GET_INFO,
    });

    setTimeout(() => {
        const res = bool !== undefined ? bool : (ut.random(0, 10) > 2);

        if (!res) {
            dispatch({
                type: TYPES.GET_INFO_ERR,
                payload: 'generate error',
            });
        } else {
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
