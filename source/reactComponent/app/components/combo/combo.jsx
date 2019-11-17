import React from 'react';
import Common from '../common.jsx';
import extd from '../extd';
import Field from '../field/field.jsx';
import List from '../list/list.jsx';
import './combo.css';

export default class Combo extends Common {
    constructor(p) {
        super(p);
        this.propToState(['visible', 'value']);
    }

    open(open = true) {
        this.setState({ visible: { list: open } });
    }

    onClick(data) {
        this.setState({
            value: data.text,
            visible: { list: false },
        });
        // this.forceUpdate();
    }

    render() {
        return (
            <div
                className = {this.state.css.self}
            >
                <Field
                    onClick={() => this.open()}
                    onChange={(value) => { this.setState({ value }); }}
                    caption = {this.props.caption}
                    value = {this.state.value}
                />
                <List
                    visible={this.state.visible.list}
                    onClick = {data => this.onClick(data)}
                    list = {this.props.list}
                />

            </div>
        );
    }
}
Combo.defaultProps = extd(Combo.defaultProps, {
    css: {
        self: 'combo',
    },
    visible: {
        list: false,
    },
    value: '',
    caption: 'Combo',
    list: [],

});
