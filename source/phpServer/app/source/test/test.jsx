import React from 'react';
import router from 'server/router';

export default class Test extends React.Component {
    onClick1() {
        router.ajax({
            id: 'test1',
            data: 'text1',
        })
            .then((data) => {
                console.info(data);
            })
            .catch((e) => {
                console.error(e);
            });
    }

    onClick2() {
        router.ajax({
            id: 'test2',
            data: 'data from test2',
        })
            .then((data) => {
                console.info(data);
            });
    }

    onClick3() {
        router.ajax({
            id: 'test3',
            data: 'data from test3',
        })
            .then((data) => {
                console.info(data);
            })
            .catch((e) => {
                console.info(e);
                alert(e.msg);
            });
    }


    render() {
        return (
            <div>
                <div onClick={o => this.onClick1(o)}>
                    Press to test 1...
                </div>
                <div onClick={o => this.onClick2(o)}>
                    Press to test 2...
                </div>
                <div onClick={o => this.onClick3(o)}>
                    Press to test 3...
                </div>
            </div>
        );
    }
}
