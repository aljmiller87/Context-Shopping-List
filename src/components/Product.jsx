import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartProvider";
import { addToCart, closeCart } from "../utilities";

const Product = (props) => {
  const myShoppingCartContext = useContext(ShoppingCartContext);
  const { state, dispatch } = myShoppingCartContext;

  let imageURL = `images/${props.image}`;
  let optionClass;
  let optionText = props.option;
  switch (props.option) {
    case "New":
      optionClass = "product_extra product_new";
      break;
    case "Sale":
      optionClass = "product_extra product_sale";
      break;
    case "Popular":
      optionClass = "product_extra product_hot";
      break;
    case "Hot":
      optionClass = "product_extra product_sale";
      break;
    default:
      optionClass = "product_extra";
      optionText = "";
  }

  const addProductToCart = () => {
    const updatedProductList = addToCart(state.cartProducts, props.id);
    dispatch({
      type: "ADD_TO_CART",
      payload: updatedProductList,
    });
  };

  return (
    <div className="product">
      <div className="product_image">
        <img src={imageURL} alt="" />
      </div>
      <div className={optionClass}>{optionText}</div>
      <div className="product_content">
        <div
          className="product_title"
          onClick={() => {
            closeCart();
          }}
        >
          <Link to={`/products/${props.id}`}>{props.name}</Link>
        </div>
        <div className="product_price">${props.price}</div>
        <button
          onClick={() => addProductToCart()}
          className="newsletter_button trans_200"
        >
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
