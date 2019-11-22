import './template/define.css';
import './template/main.css';
import redux from './redux';


$(() => {
    console.log('Hello!  ');

    redux.store.subscribe(() => {
        const state = redux.store.getState();
        console.info('subscribe', state);
    });

    const err = $('#err');
    const ok = $('#ok');
    const rand = $('#random');

    rand.on('click', () => {
        redux.actions.actGetInfo();
    });
    ok.on('click', () => {
        redux.actions.actGetInfo(true);
    });
    err.on('click', () => {
        redux.actions.actGetInfo(false);
    });
});
