import React, { Fragment } from 'react'
import Row from './Row';
import ShoppingCartContext from '../context/ShoppingCartContext';

const Rows = (props) => {

    return (
        <Fragment>
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
        </Fragment>

    )
}

export default Rows;