import React from 'react';

export default class Common extends React.Component {
    constructor(p) {
        super(p);
        this.state = {};
        this.propToState('css');
        this.debug = false;
    }

    propToState(a) {
        if (typeof a === 'string') {
            this.state[a] = this.props[a];
        } else if (Array.isArray(a)) {
            a.map(v => this.propToState(v));
        }
    }


    render() {
        return (
            <div
                className = {this.state.css}
            >
                {this.props.caption}
            </div>
        );
    }
}

Common.defaultProps = {
    id: (Math.random() * 9999999 + 1000000).toString(),
    css: {
        self: '',
    },
    caption: '',
};
