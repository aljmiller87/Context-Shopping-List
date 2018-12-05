import React, { Component } from 'react';

import MyContext from './Context';

export default class MyConsumer extends Component {

    render() {

        return (
            <MyContext.Consumer>
                {(context) => (
                    <p>The number is: {context.cart}</p>
                )}
            </MyContext.Consumer>
        );
    }
}
