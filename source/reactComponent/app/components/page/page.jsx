import React from 'react';
import Common from '../common.jsx';
import extd from '../extd';
import Button from '../button/button.jsx';
import './page.css';


export default class Page extends Common {
    constructor(p) {
        super(p);
    }

    onClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render() {
        return (
            <div
                className={this.state.css.self}
            >
                <div className="up">
                    <Button
                        caption ="dlg"
                        onClick={() => this.onClick()}
                    />
                </div>

                <div className="center"></div>

                <div className="down"></div>

            </div>
        );
    }
}

Page.defaultProps = extd(Page.defaultProps, {
    css: {
        self: 'page',
    },
    onClick: undefined,

});
