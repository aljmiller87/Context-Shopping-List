import React, { Component } from 'react'
import Product from './Product';

import MyContext from './../context/Context';

 export default class Products extends Component {
    constructor(props) {
       super(props)
     
       this.state = {
          
       }
    }

    componentDidMount() {
		let productList = [];

		this.setState({products: productList})

    }

    render() {
        // const products = this.props.products.map((product, index) => {
        //   return (
            // <Product
            //   key={index}
            //   image={product.image}
            //   name={product.name}
            //   price={product.price}
            //   option={product.option}
            // />
        //   )
        // })
		


		    return (

            <div className="products">
              <div className="container">
                <div className="row">
                  <div className="col">                    
                    <div className="product_grid">

					  					{/* {products} */}
											<MyContext.Consumer>
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
															/>
														)
													})
													return products
												}}
											</MyContext.Consumer>

                    </div>                      
                  </div>
                </div>
              </div>
            </div>
		    )
	  }
     
}