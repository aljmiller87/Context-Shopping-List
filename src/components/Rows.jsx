import React, { Fragment, useContext } from "react";
import Row from "./Row";
import { ShoppingCartContext } from "../context/ShoppingCartProvider";

const Rows = (props) => {
  const myShoppingCartContext = useContext(ShoppingCartContext);
  const { state } = myShoppingCartContext;

  const cartProducts = state.cartProducts.map((product, index) => {
    return <Row key={index} id={product.id} quantity={product.quantity} />;
  });

  return <Fragment>{cartProducts}</Fragment>;
};

export default Rows;
