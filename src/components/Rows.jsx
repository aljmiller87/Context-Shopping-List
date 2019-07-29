import React, { Fragment, useContext } from 'react'
import Row from './Row';
import ShoppingCartContext from '../context/ShoppingCartContext';

const Rows = (props) => {
    const myShoppingCartContext = useContext(ShoppingCartContext);
    const cartProducts = myShoppingCartContext.cartProducts.map((product, index) => {
        return (
            <Row
                key={index}
                id={product.id}
                quantity={product.quantity}
                context={myShoppingCartContext}
            />
        )
    });

    return (
        <Fragment>
            {/* {Cart Products} */}
            { cartProducts }
        </Fragment>

    )
}

export default Rows;