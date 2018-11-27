import React, { Component } from 'react'
import Product from './Product';
 export default class Products extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          
       }
     }

     render() {
        const products = this.props.products.map((product) => {
          return (
            <Product
              image={product.image}
              name={product.name}
              price={product.price}
              option={product.option}
            />
          )
        })
		    return (

            <div className="products">
              <div className="container">
                <div className="row">
                  <div className="col">                    
                    <div className="product_grid">

                      {products}
                      
                    </div>                      
                  </div>
                </div>
              </div>
            </div>
		)
	}
     
 }