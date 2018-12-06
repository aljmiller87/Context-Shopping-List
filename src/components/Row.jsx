import React, { Component } from 'react'
import MyContext from './../context/Context';

const Row = (props) => {

        let index = props.context.findProductIndex(props.id);
        let cartIndex = props.context.productInCart(props.id);

        return (
            <div className="row cart_items_row">
                
                    <div className="col">

                        {/* <!-- Cart Item --> */}
                        <div className="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                            {/* <!-- Name --> */}
                            <div className="cart_item_product d-flex flex-row align-items-center justify-content-start">
                                <div className="cart_item_image">
                                    <div>
                                        <img src={`images/${props.context.products[index].image}`} alt=""/>
                                    </div>
                                </div>
                                <div className="cart_item_name_container">
                                    <div className="cart_item_name">     
                                        <a href="#"> {props.context.products[index].name} </a>                                   
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Price --> */}
                            <div className="cart_item_price">${props.context.products[index].price} </div>
                            {/* <!-- Quantity --> */}
                            <div className="cart_item_quantity">
                                <div className="product_quantity_container">
                                    <div className="product_quantity clearfix">
                                        <span>Qty</span>
                                        <b>{props.context.cartProducts[cartIndex].quantity} </b>

                                        <div className="quantity_buttons">
                                            <div onClick={() => props.context.addToCart(props.id)} id="quantity_inc_button" className="quantity_inc quantity_control"><i className="fa fa-chevron-up" aria-hidden="true"></i></div>
                                            <div onClick={() => props.context.removeFromCart(props.id)} id="quantity_dec_button" className="quantity_dec quantity_control"><i className="fa fa-chevron-down" aria-hidden="true"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Total --> */}
                            <div className="cart_item_total">${props.context.cartProducts[cartIndex].quantity * props.context.cartProducts[cartIndex].price} </div>
                        </div>

                    </div>
                
            </div>
        )
    
}

export default Row;