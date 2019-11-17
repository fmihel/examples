import React from 'react';

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
        };
        this.style = {
            border: '1px solid gray',
        };
    }

    render() {
        return (
            <form id="article-form" style={this.style}>
                <h2>Список телефонов</h2>
                <ul>
                    <li>iPhone 7</li>
                    <li>Samsung Galaxy A5</li>
                    <li>HTC U Ultra</li>
                    <li>Pixel XL</li>
                </ul>
            </form>
        );
    }
}

export default FormContainer;
