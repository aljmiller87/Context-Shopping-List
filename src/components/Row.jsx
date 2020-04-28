import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartProvider";
import {
  addToCart,
  cartTrigger,
  findProductInCart,
  findProductInProducts,
  removeFromCart,
} from "../utilities";
import { products } from "../data/products";

const Row = (props) => {
  const myShoppingCartContext = useContext(ShoppingCartContext);
  const { state, dispatch } = myShoppingCartContext;

  let index = findProductInProducts(props.id);
  let cartIndex = findProductInCart(state.cartProducts, props.id);

  const addItemToCart = (id) => {
    const updatedCartProducts = addToCart(state.cartProducts, id);
    dispatch({
      type: "ADD_TO_CART",
      payload: updatedCartProducts,
    });
  };

  const removeItemFromCart = (id) => {
    const updatedCartProducts = removeFromCart(state.cartProducts, id);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: updatedCartProducts,
    });
  };

  return (
    <div className="row cart_items_row">
      <div className="col">
        {/* <!-- Cart Item --> */}
        <div className="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
          {/* <!-- Name --> */}
          <div className="cart_item_product d-flex flex-row align-items-center justify-content-start">
            <div className="cart_item_image">
              <div>
                <img src={`images/${products[index].image}`} alt="" />
              </div>
            </div>
            <div className="cart_item_name_container">
              <div className="cart_item_name" onClick={cartTrigger}>
                <Link to={`/products/${products[index].id}`}>
                  {" "}
                  {products[index].name}{" "}
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Price --> */}
          <div className="cart_item_price">${products[index].price} </div>
          {/* <!-- Quantity --> */}
          <div className="cart_item_quantity">
            <div className="product_quantity_container">
              <div className="product_quantity clearfix">
                <span>Qty</span>
                <b>{state.cartProducts[cartIndex].quantity} </b>

                <div className="quantity_buttons">
                  <div
                    onClick={() => addItemToCart(props.id)}
                    id="quantity_inc_button"
                    className="quantity_inc quantity_control"
                  >
                    <i className="fa fa-chevron-up" aria-hidden="true"></i>
                  </div>
                  <div
                    onClick={() => removeItemFromCart(props.id)}
                    id="quantity_dec_button"
                    className="quantity_dec quantity_control"
                  >
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Total --> */}
          <div className="cart_item_total">
            $
            {state.cartProducts[cartIndex].quantity *
              state.cartProducts[cartIndex].price}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
