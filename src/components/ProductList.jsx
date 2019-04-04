import React, { Component } from 'react'
import Product from './Product';
import ShoppingCartContext from '../context/ShoppingCartContext';
import Isotope from '../utils/isotope';


 export default class Products extends Component {

    componentDidMount() {
        Isotope();
    }


    render() {
      

		return (

            <div className="products">
              <div className="container">
                <div className="row">
                  <div className="col">                    
                    <div className="product_grid">
					  	{/* {products} */}
                        <ShoppingCartContext.Consumer>
                            {(context) => {
                                let products = context.products.map((product, index) => {
                                    return (
                                        <Product
                                            key={index}
                                            id={product.id}
                                            image={product.image}
                                            name={product.name}
                                            price={product.price}
                                            option={product.option}
                                            addToCart={context.addToCart}
                                            closeCart={context.closeCart}
                                        />
                                    )
                                })
                                return products
                            }}
                        </ShoppingCartContext.Consumer>

                    </div>                      
                  </div>
                </div>
              </div>
            </div>
		    )
	  }
     
}