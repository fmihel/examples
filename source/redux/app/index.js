import './template/main.css';
import { ut } from 'fmihel-browser-lib';
import { actSetData, actShowData } from './redux/actions';
import store from './redux/store';

function showData() {
    const state = store.getState();
    const { data } = state;

    $('#name').text(data.name);
    $('#age').text(data.age);

    $('#data').css('display', state.UI.showData ? 'block' : 'none');
}

store.subscribe(() => {
    const state = store.getState();
    console.info(state);
    showData();
});

$(() => {
    showData();

    $('#btnSetData').on('click', () => {
        actSetData({
            name: ut.random_str(5),
        });
    });

    $('#btnShowData').on('click', () => {
        const state = store.getState();
        actShowData(!state.UI.showData);
    });
});
