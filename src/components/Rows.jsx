import React, { Component } from 'react'
import Row from './Row';
import ShoppingCartContext from '../context/ShoppingCartContext';

export default class Rows extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {

        console.log('rows rendered');
        return (
            <div>
            {/* {Cart Products} */}
            <ShoppingCartContext.Consumer>
                {(context) => {
                    let products = context.cartProducts.map((product, index) => {
                        return (
                            <Row
                                key={index}
                                id={product.id}
                                quantity={product.quantity}
                                context={context}
                            />
                        )
                    })
                    return products
                }}
            </ShoppingCartContext.Consumer>
            </div>

        )
    }
}