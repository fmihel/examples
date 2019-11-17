import React from 'react';
import Common from '../common.jsx';
import extd from '../extd';
import Button from '../button/button.jsx';
import Field from '../field/field.jsx';
import './dialog.css';

export default class Dialog extends Common {
    constructor(p) {
        super(p);
        this.propToState(['visible', 'data']);
        this.divClick = false;
        this.data = this.state.data;
    }

    onClick() {
        if (!this.divClick) {
            this.setState({ visible: false });
        }
        this.divClick = false;
    }

    show(bool = true) {
        this.setState({ visible: bool });
    }

    close() {
        this.show(false);
        console.info(this.data);
    }

    render() {
        return (
            <div
                style={{
                    display: (this.state.visible ? 'block' : 'none'),
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                }}
            >
                <div
                    className={this.state.css.shadow}
                    onClick={() => { this.onClick(); }}
                ></div>

                <div
                    className={this.state.css.frame}
                    onClick={() => { this.onClick(); }}
                >
                    <div
                        className={this.state.css.self}
                        onClick={(e) => { this.divClick = true; e.preventDefault(); }}
                    >
                        <div
                            className={this.state.css.header}
                        >


                        </div>
                        <div
                            className={this.state.css.content}
                        >
                            {this.state.data.map((v, i) => (
                                <Field
                                    key={`${i}k`}
                                    value={v.value}
                                    caption={v.label}
                                    data={v}
                                    onChange={(value) => {
                                        this.data[i].value = value;
                                        this.setState({ data: this.data });
                                    }}
                                />
                            ))
                            }
                        </div>
                        <div
                            className={this.state.css.footer}
                        >
                            <Button caption="close" onClick={() => { this.close(); }}/>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

Dialog.defaultProps = extd(Dialog.defaultProps, {
    css: {
        frame: 'dialog_frame',
        shadow: 'shadow',
        self: 'dialog',
        header: 'header',
        content: 'content',
        footer: 'footer',
    },
    visible: false,
    data: [
        { label: 'Name', value: 'Mike' },
        { label: 'Fam', value: 'Storm' },
        { label: 'Age', value: '30' },
    ],
});
