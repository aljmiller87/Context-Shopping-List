import React, { useEffect, useContext } from 'react'
import Product from './Product';
import ShoppingCartContext from '../context/ShoppingCartContext';
import Isotope from '../utils/isotope';


const Products = props => {

  useEffect(() => {
    Isotope();
  }, []);

  const myShoppingCartContext = useContext(ShoppingCartContext);
  const products = myShoppingCartContext.products.map((product, index) => {

    return (
        <Product
            key={index}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            option={product.option}
            addToCart={myShoppingCartContext.addToCart}
            closeCart={myShoppingCartContext.closeCart}
        />
    )
  })

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="product_grid">
              { products }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;
