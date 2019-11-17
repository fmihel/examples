import React from 'react';
import Common from '../common.jsx';
import Edit from '../edit/edit.jsx';
import Button from '../button/button.jsx';
import extd from '../extd';
import './field.css';

export default class Field extends Common {
    constructor(props) {
        super(props);
        this.propToState(['text', 'value']);
    }

    onChange(value) {
        if (this.props.onChange) {
            this.props.onChange(value);
        } else {
            this.setState({ value });
        }
    }

    onClick() {
        if (this.props.onClick) {
            this.props.onClick();
        } else {
            this.setState({ value: '' });
        }
    }

    render() {
        return (
            <div
                className = {this.state.css.self}
            >
                <Edit
                    caption={this.props.caption}
                    onChange={value => this.onChange(value)}
                    value={(this.props.onChange ? this.props.value : this.state.value)}
                    visible={{ label: this.props.visible.label }}
                />
                <Button
                    caption={this.props.btnCaption}
                    visible={this.props.visible.button }
                    onClick={() => { this.onClick(); }}

                />

            </div>
        );
    }
}

Field.defaultProps = extd(Field.defaultProps, {
    css: {
        self: 'field',
    },
    onClick: undefined,
    onChange: undefined,
    caption: 'LABEL',
    value: '',
    btnCaption: '...',
    visible: {
        button: true,
        label: true,
    },
});
