import React, { Component } from 'react'

import ShoppingCartContext from '../context/ShoppingCartContext';
import bannerImage from '../images/cart.jpg';
import Banner from './Banner';
// import BasicExplicit from '../formik/BasicExplicit';
// import Basic from '../formik/Basic';
import CheckoutForm from '../formik/CheckoutForm';
import OrderReview from './OrderReview';

export default class Checkout extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    render() {
        const bannerStyle = {
            backgroundImage:`url(${bannerImage})`
        }
        return (
            <div>
                <Banner bannerStyle={bannerStyle}/>                
                <div className="checkout">
                    <div className="container">
                        <div className="row">

                            {/* <!-- Billing Info --> */}
                            <CheckoutForm />
                            {/* <ShoppingCartContext.Consumer>
                                {(context) => (
                                    <Form cartProducts={context.cartProducts}/>
                                )}
                            </ShoppingCartContext.Consumer>
 */}
                            {/* <!-- Order Info --> */}

                            <div className="col-lg-6">
                                <ShoppingCartContext.Consumer>
                                    {(context) => (
                                        <OrderReview cartProducts={context.cartProducts}/>
                                    )}
                                </ShoppingCartContext.Consumer>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
    
}