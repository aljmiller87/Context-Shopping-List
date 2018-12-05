import React, { Component } from 'react'
import MyContext from './../context/Context';

export default class Row extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    render() {
        let price = 10.50;
        let index;


        console.log('index in render',index);

        return (
            <div className="row cart_items_row">
                <MyContext.Consumer>
                    {(context) => {
                        index = context.findProductIndex(this.props.id);
                        console.log('index in return', index);
                        return (
                            <span></span>
                        )}
                    }
                </MyContext.Consumer>



                
                    <div className="col">

                        {/* <!-- Cart Item --> */}
                        <div className="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                            {/* <!-- Name --> */}
                            <div className="cart_item_product d-flex flex-row align-items-center justify-content-start">
                                <div className="cart_item_image">
                                    <div>
                                        <MyContext.Consumer>
                                            {(context) => {
                                                return (
                                                    <img src={`images/${context.products[index].image}`} alt=""/>
                                                )}
                                            }
                                        </MyContext.Consumer>
                                    </div>
                                </div>
                                <div className="cart_item_name_container">
                                    <div className="cart_item_name">                                        
                                        <MyContext.Consumer>
                                            {(context) => {
                                                return (
                                                    <a href="#"> {context.products[index].name} </a>
                                                )}
                                            }
                                        </MyContext.Consumer>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Price --> */}
                            <MyContext.Consumer>
                                {(context) => {
                                    return (
                                        <div className="cart_item_price">${context.products[index].price} </div>
                                    )}
                                }
                            </MyContext.Consumer>
                            {/* <!-- Quantity --> */}
                            <div className="cart_item_quantity">
                                <div className="product_quantity_container">
                                    <div className="product_quantity clearfix">
                                        <span>Qty</span>
                                        <MyContext.Consumer>
                                            {(context) => {
                                                let cartIndex = context.productInCart(this.props.id);
                                                return (
                                                    
                                                    <b>{context.cartProducts[cartIndex].quantity} </b>
                                                )}
                                            }
                                        </MyContext.Consumer>

                                        <div className="quantity_buttons">
                                            <MyContext.Consumer>
                                                {(context) => {
                                                    return (
                                                        <div onClick={() => context.addToCart(this.props.id)} id="quantity_inc_button" className="quantity_inc quantity_control"><i className="fa fa-chevron-up" aria-hidden="true"></i></div>
                                                    )}
                                                }
                                            </MyContext.Consumer>
                                            <MyContext.Consumer>
                                                {(context) => {
                                                    return (
                                                        <div onClick={() => context.removeFromCart(this.props.id)} id="quantity_dec_button" className="quantity_dec quantity_control"><i className="fa fa-chevron-down" aria-hidden="true"></i></div>
                                                    )}
                                                }
                                            </MyContext.Consumer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Total --> */}
                            <MyContext.Consumer>
                                {(context) => {
                                    let cartIndex = context.productInCart(this.props.id);
                                    return (
                                        
                                        <div className="cart_item_total">${context.cartProducts[cartIndex].quantity * context.cartProducts[cartIndex].price} </div>
                                    )}
                                }
                            </MyContext.Consumer>

                        </div>

                    </div>
                
            </div>
        )
    }
    
}