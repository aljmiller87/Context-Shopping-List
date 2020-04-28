import React, { Fragment } from "react";

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
              <OrderReview />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Checkout;
