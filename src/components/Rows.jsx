import React, { Component } from 'react'
import Row from './Row';
import MyContext from './../context/Context';

export default class Rows extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
        return (
            <div>
            {/* {Cart Products} */}
            <MyContext.Consumer>
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
            </MyContext.Consumer>
            </div>

        )
    }
}