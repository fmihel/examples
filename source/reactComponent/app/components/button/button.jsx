import React from 'react';
import Common from '../common.jsx';
import extd from '../extd';
import './button.css';

export default class Button extends Common {
    constructor(p) {
        super(p);
        this.state.inc = 0;
    }

    onClick(text) {
        if (this.props.onClick) {
            this.props.onClick(text);
        }
        this.setState({ inc: this.state.inc + 1 });
    }

    render() {
        return (
            <input
                type="button"
                className={this.state.css.self}
                onClick = {() => this.onClick(this.props.caption)}
                value = {this.props.caption + this.state.inc}
                style={{ display: (this.props.visible ? 'block' : 'none') }}

            />
        );
    }
}
Button.defaultProps = extd(Button.defaultProps, {
    css: {
        self: 'btn',
    },
    onClick: undefined,
    caption: 'press..',
    visible: true,
});
