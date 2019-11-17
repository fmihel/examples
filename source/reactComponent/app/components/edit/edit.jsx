import React from 'react';
import Common from '../common.jsx';
import extd from '../extd';
import './edit.css';


export default class Edit extends Common {
    constructor(p) {
        super(p);
        this.propToState('visible', 'value');
    }

    onChange(value) {
        if (this.props.onChange) {
            this.props.onChange(value);
        } else {
            this.setState({ value });
        }
    }


    render() {
        return (
            <div
                className = {this.state.css.self}
            >
                {/*--------------------------------------------------------------------*/}
                <div
                    className = {this.state.css.label}
                    style={{ display: (this.state.visible.label ? 'block' : 'none') }}
                >
                    {this.props.caption}
                </div>
                {/*--------------------------------------------------------------------*/}
                <input
                    type = "text"
                    value={(this.props.onChange ? this.props.value : this.state.value)}
                    className = {this.state.css.input}
                    onChange = {o => this.onChange(o.target.value)}
                />
                {/*--------------------------------------------------------------------*/}
            </div>
        );
    }
}

Edit.defaultProps = extd(Edit.defaultProps, {
    css: {
        self: 'edit',
        input: 'edit_input',
        label: 'edit_label',
    },
    onChange: undefined,
    caption: 'edit',
    value: '',
    visible: {
        label: true,
    },
});
