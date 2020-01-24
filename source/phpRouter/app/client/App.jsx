import React from 'react';
import { flex, binds } from 'fmihel-browser-lib';
import router from 'fmihel-php-router-client';


export class App extends React.Component {
    constructor(p) {
        super(p);
        binds(this, 'send');
    }

    send() {
        router({
            id: 'send',
            data: 'hello1',
        }).then((data) => {
            console.info(data);
        }).catch((e) => {
            console.error(e);
        });
    }

    render() {
        return (
            <div id='app' style={{ ...flex('horiz stretch'), padding: 10 }}>
                <div>
                    <button onClick={this.send}>send</button>
                </div>
            </div>
        );
    }
}
