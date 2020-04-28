import React, { useContext, Fragment } from "react";

import { ShoppingCartContext } from "../context/ShoppingCartProvider";
import bannerImage from "../images/cart.jpg";
import Banner from "./Banner";
// import BasicExplicit from '../formik/BasicExplicit';
// import Basic from '../formik/Basic';
import CheckoutForm from "../formik/CheckoutForm";
import OrderReview from "./OrderReview";

const Checkout = (props) => {
  const bannerStyle = {
    backgroundImage: `url(${bannerImage})`,
  };

  const myShoppingCartContext = useContext(ShoppingCartContext);

  return (
    <Fragment>
      <Banner bannerStyle={bannerStyle} />
      <div className="checkout">
        <div className="container">
          <div className="row">
            {/* <!-- Billing Info --> */}
            <CheckoutForm />

            {/* <!-- Order Info --> */}

            <div className="col-lg-6">
              <OrderReview cartProducts={myShoppingCartContext.cartProducts} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Checkout;
