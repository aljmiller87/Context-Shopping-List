import React, { Component } from 'react'

export default class OrderReview extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    render() {
        let total = 0;
        if (this.props.cartProducts) {
            total = this.props.cartProducts.reduce((acc, currentValue) => {
                return acc += (currentValue.price * currentValue.quantity);
            }, 0);
        }

        return (
            <div className="order checkout_section">
                <div className="section_title">Your order</div>
                <div className="section_subtitle">Order details</div>

                {/* <!-- Order details --> */}
                <div className="order_list_container">
                    {/* <div className="order_list_bar d-flex flex-row align-items-center justify-content-start">
                        <div className="order_list_title">Product</div>
                        <div className="order_list_value ml-auto">Total</div>
                    </div> */}
                    <ul className="order_list">
                        {/* <li className="d-flex flex-row align-items-center justify-content-start">
                            <div className="order_list_title">Cocktail Yellow dress</div>
                            <div className="order_list_value ml-auto">$59.90</div>
                        </li> */}
                        <li className="d-flex flex-row align-items-center justify-content-start">
                            <div className="order_list_title">Subtotal</div>
                            <div className="order_list_value ml-auto">${total}</div>
                        </li>
                        <li className="d-flex flex-row align-items-center justify-content-start">
                            <div className="order_list_title">Shipping</div>
                            <div className="order_list_value ml-auto">Free</div>
                        </li>
                        <li className="d-flex flex-row align-items-center justify-content-start">
                            <div className="order_list_title">Total</div>
                            <div className="order_list_value ml-auto">${total}</div>
                        </li>
                    </ul>
                </div>

                {/* <!-- Payment Options --> */}
                <div className="payment">
                    <div className="payment_options">
                        <label className="payment_option clearfix">Paypal
                            <input type="radio" name="radio"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="payment_option clearfix">Cach on delivery
                            <input type="radio" name="radio"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="payment_option clearfix">Credit card
                            <input type="radio" defaultChecked name="radio"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="payment_option clearfix">Direct bank transfer
                            <input type="radio" name="radio"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>

                {/* <!-- Order Text --> */}
                <div className="order_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra temp or so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</div>
                <div className="button order_button"><a href="#">Place Order</a></div>
            </div>
        )
    }
    
}