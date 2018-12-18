import React, { Component } from 'react'
import { TweenMax, Bounce } from 'gsap';

import ShoppingCartContext from './ShoppingCartContext';

export default class MyProvider extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        addToCart: this.addToCart.bind(this),
        clearCart: this.clearCart.bind(this),
        findProductInProducts: this.findProductInProducts.bind(this),
        findProductInCart: this.findProductInCart.bind(this),
        removeFromCart: this.removeFromCart.bind(this),
        cart: 0,
        cartProducts: [],
        products: [
          {
            id: 1,
            image: "product_1.jpg",
            name: "Smart Phone",
            price: 670,
            option: "New"
          },
          {
            id: 2,
            image: "product_2.jpg",
            name: "Speaker",
            price: 90,
            option: "Sale"
          },
          {
            id: 3,
            image: "product_3.jpg",
            name: "Cable",
            price: 15,
            option: "Default"
          },
          {
            id: 4,
            image: "product_4.jpg",
            name: "Computer",
            price: 1250,
            option: "Default"
          },
          {
            id: 5,
            image: "product_5.jpg",
            name: "Headphones",
            price: 65,
            option: "Default"
          },
          {
            id: 6,
            image: "product_6.jpg",
            name: "Tablet",
            price: 590,
            option: "Popular"
          },
          {
            id: 7,
            image: "product_7.jpg",
            name: "Budget Smart Phone",
            price: 190,
            option: "Hot"
          },
          {
            id: 8,
            image: "product_8.jpg",
            name: "Keyboard",
            price: 45,
            option: "Default"
          }
        ]
      }
  
    }

    componentDidMount() {
      let state = JSON.parse(window.localStorage.getItem("saved_state"));

      if (state) {
        this.setState({
          cart: state.cart,
          cartProducts: state.cartProducts
        });
      }
    }
    
    componentDidUpdate() {
      let cart = {...this.state.cartProducts}
      let cartProducts = [...this.state.cartProducts]
      let state = {
        cart: this.state.cart,
        cartProducts
      };
      window.localStorage.setItem("saved_state", JSON.stringify(state))
    }

    addToCart(productID) {
      // Getting copy of list of products in cart
      let cartProducts = this.state.cartProducts;

      // Checking if product is already in cart
      let foundProduct = this.findProductInCart(productID);

      // Setting state by either adding product to cart or updating product's quantity in cart
      if (foundProduct !== -1) {
        let productQuantity = this.state.cartProducts[foundProduct].quantity;
        cartProducts[foundProduct].quantity = productQuantity + 1
      } else {
        cartProducts[cartProducts.length] = {
          id: productID,
          price: this.state.products[this.findProductInProducts(productID)].price,
          quantity: 1
        }
      }
      
      this.setState({
        cart: this.state.cart + 1,
        cartProducts
      });

      this.animateCartButton();
    }

    animateCartButton() {
      TweenMax.from(".cartButton", 1, {scale:1.15, color:"#D8635F", ease: Bounce.easeOut})
    }

    clearCart() {
      this.setState({
        cart: 0,
        cartProducts: []
      });

    }

    findProductInCart(id) {
      return this.state.cartProducts.findIndex(item => item.id == id)
    }
    
    findProductInProducts(id) {
      return this.state.products.findIndex(item => item.id == id)
    }

    removeFromCart(productID) {
      // Getting copy of list of products in cart
      let cartProducts = this.state.cartProducts;

      // Finding index of product in cart
      let index = this.findProductInCart(productID);

      // Setting state by either adding product to cart or updating product's quantity in cart
      let productQuantity = this.state.cartProducts[index].quantity;
      if (productQuantity > 1) {
        cartProducts[index].quantity = productQuantity - 1
      } else {
        cartProducts.splice(index, 1);
      }
      
      this.setState({
        cart: this.state.cart - 1,
        cartProducts
      });

    }
  
  
    render() {
      console.log('provider rerendered');
      return (
        <ShoppingCartContext.Provider
            value={{ ...this.state }}
            >
            {this.props.children}
        </ShoppingCartContext.Provider >
      )
    }
  }
  
