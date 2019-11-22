import React from 'react';
import { flex } from 'fmihel-browser-lib';


export class App extends React.Component {
    constructor(p) {
        super(p);
    }

    render() {
        return (
            <div id='app' style={{ ...flex('horiz stretch'), padding: 10 }}>
                App
            </div>
        );
    }
}
