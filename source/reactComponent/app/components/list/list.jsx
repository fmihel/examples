import React from 'react';
import Common from '../common.jsx';
import extd from '../extd';
import './list.css';

class ListItem extends Common {
    constructor(p) {
        super(p);
        this.propToState('caption');
    }

    onClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props.data);
        }
    }

    render() {
        return (
            <div
                onClick = {() => this.onClick()}
                className = {this.state.css.self}
            >
                {this.state.caption}
            </div>
        );
    }
}

ListItem.defaultProps = extd(ListItem.defaultProps, {
    css: {
        self: 'list_item',
    },
    onClick: undefined,
    caption: 'item',
    data: 'more',
});

export default class List extends Common {
    onClick(data) {
        if (this.props.onClick) {
            this.props.onClick(data);
        }
    }

    render() {
        return (
            <div
                className={this.state.css.self}
                style={{ display: (this.props.visible ? 'block' : 'none') }}
            >
                {
                    this.props.list.map((v, i) => (
                        <ListItem
                            key={(v.key !== undefined ? v.key : i)}
                            caption={v.text}
                            onClick={data => this.onClick(data)}
                            data={v}
                        />
                    ))
                }
            </div>
        );
    }
}

List.defaultProps = extd(List.defaultProps, {
    css: {
        self: 'list',
    },
    visible: true,
    onClick: undefined,
    caption: 'item',
    list: [
        { key: 0, text: 'item1' },
        { key: 1, text: 'item2' },
        { key: 2, text: 'item3' },
        { key: 3, text: 'item4' },
        { key: 4, text: 'item5' },
        { key: 5, text: 'item6' },
    ],

});
