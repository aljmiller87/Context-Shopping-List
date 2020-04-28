import React, { useEffect, useContext } from "react";
import Product from "./Product";
import { ShoppingCartContext } from "../context/ShoppingCartProvider";
import Isotope from "../utils/isotope";
import { products } from "../data/products";

const Products = (props) => {
  useEffect(() => {
    Isotope();
  }, []);

  const myShoppingCartContext = useContext(ShoppingCartContext);
  const renderProducts = products.map((item, index) => {
    return (
      <Product
        key={index}
        id={item.id}
        image={item.image}
        name={item.name}
        price={item.price}
        option={item.option}
        addToCart={myShoppingCartContext.addToCart}
        closeCart={myShoppingCartContext.closeCart}
      />
    );
  });

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="product_grid">{renderProducts}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
