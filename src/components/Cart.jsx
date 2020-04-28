import React, { useContext } from "react";
import CartLevel1 from "./CartLevel1";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartProvider";
import { cartTrigger } from "../utilities";

const Cart = (props) => {
  const myShoppingCartContext = useContext(ShoppingCartContext);
  const { state, dispatch } = myShoppingCartContext;

  let subtotal = 0;
  state.cartProducts.forEach((product) => {
    subtotal = subtotal + product.price * product.quantity;
  });

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <div className="Cart cart_info">
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <!-- Column Titles --> */}
            <div className="cart_info_columns clearfix">
              <div className="cart_info_col cart_info_col_product">Product</div>
              <div className="cart_info_col cart_info_col_price">Price</div>
              <div className="cart_info_col cart_info_col_quantity">
                Quantity
              </div>
              <div className="cart_info_col cart_info_col_total">Total</div>
            </div>
          </div>
        </div>

        {/* Deliberately nesting data unnecessarily deep to show Context API in action   */}
        <CartLevel1 />

        <div className="row row_cart_buttons">
          <div className="col">
            <div className="cart_buttons d-flex flex-lg-row flex-column align-items-start justify-content-start">
              <div
                className="button continue_shopping_button"
                onClick={() => cartTrigger()}
              >
                <Link to="/">Continue shopping</Link>
              </div>
              <div className="cart_buttons_right ml-lg-auto">
                <div className="button clear_cart_button">
                  <a onClick={clearCart}>Clear cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row_extra">
          <div className="col-lg-4">
            {/* <!-- Delivery --> */}
            <div className="delivery">
              <div className="section_title">Shipping method</div>
              <div className="section_subtitle">Select the one you want</div>
              <div className="delivery_options">
                <label className="delivery_option clearfix">
                  Next day delivery
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                  <span className="delivery_price">$4.99</span>
                </label>
                <label className="delivery_option clearfix">
                  Standard delivery
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                  <span className="delivery_price">$1.99</span>
                </label>
                <label className="delivery_option clearfix">
                  Personal pickup
                  <input type="radio" defaultChecked name="radio" />
                  <span className="checkmark"></span>
                  <span className="delivery_price">Free</span>
                </label>
              </div>
            </div>

            {/* <!-- Coupon Code --> */}
            <div className="coupon">
              <div className="section_title">Coupon code</div>
              <div className="section_subtitle">Enter your coupon code</div>
              <div className="coupon_form_container">
                <form action="#" id="coupon_form" className="coupon_form">
                  <input
                    type="text"
                    className="coupon_input"
                    required="required"
                  />
                  <button className="button coupon_button">
                    <span>Apply</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 offset-lg-2">
            <div className="cart_total">
              <div className="section_title">Cart total</div>
              <div className="section_subtitle">Final info</div>
              <div className="cart_total_container">
                <ul>
                  <li className="d-flex flex-row align-items-center justify-content-start">
                    <div className="cart_total_title">Subtotal</div>
                    <div className="cart_total_value ml-auto">${subtotal}</div>
                  </li>
                  <li className="d-flex flex-row align-items-center justify-content-start">
                    <div className="cart_total_title">Tax</div>
                    <div className="cart_total_value ml-auto">
                      Taxation is theft
                    </div>
                  </li>

                  <li className="d-flex flex-row align-items-center justify-content-start">
                    <div className="cart_total_title">Shipping</div>
                    <div className="cart_total_value ml-auto">Free</div>
                  </li>
                  <li className="d-flex flex-row align-items-center justify-content-start">
                    <div className="cart_total_title">Total</div>
                    <div className="cart_total_value ml-auto">${subtotal}</div>
                  </li>
                </ul>
              </div>
              <div
                className="button checkout_button"
                onClick={() => cartTrigger()}
              >
                <Link to="/checkout">Proceed to checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
