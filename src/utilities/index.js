import { TweenMax, Bounce } from "gsap";
import { products } from "../data/products";

export const addToCart = (cartProducts, id) => {
  if (!cartProducts || !id) {
    return null;
  }
  // Getting copy of list of products in cart
  let updatedCartProducts = [...cartProducts];

  // Checking if product is already in cart
  let foundProductIndex = findProductInCart(cartProducts, id);

  // Setting state by either adding product to cart or updating product's quantity in cart
  if (foundProductIndex !== -1) {
    let productQuantity = updatedCartProducts[foundProductIndex].quantity;
    updatedCartProducts[foundProductIndex].quantity = productQuantity + 1;
  } else {
    updatedCartProducts.push({
      id: id,
      price: products[findProductInProducts(id)].price,
      quantity: 1,
    });
  }

  animateCartButton();

  return updatedCartProducts;
  // this.setState({
  //   cart: this.state.cart + 1,
  //   cartProducts,
  // });
};

export const animateCartButton = () => {
  TweenMax.from(".cartButton", 1, {
    scale: 1.15,
    color: "#D8635F",
    ease: Bounce.easeOut,
  });
};

export const cartTrigger = () => {
  let cart = document.querySelector(".Cart");
  if (cart) {
    cart.classList.toggle("open");
  }
};

export const closeCart = () => {
  let cart = document.querySelector(".Cart");
  if (cart) {
    cart.classList.remove("open");
  }
};

export const fetchImage = (name) => {};

export const findProductInCart = (cartProducts, id) => {
  if (!cartProducts || !id) {
    return null;
  }
  return cartProducts.findIndex((item) => item.id === id);
};

export const findProductInProducts = (id) => {
  if (!id) {
    return null;
  }
  return products.findIndex((item) => item.id === id);
};

export const removeFromCart = (cartProducts, id) => {
  if (!cartProducts || !id) {
    return null;
  }
  // Getting copy of list of products in cart
  let cartProductsCopy = [...cartProducts];

  // Finding index of product in cart
  let index = findProductInCart(cartProductsCopy, id);

  // Setting state by either adding product to cart or updating product's quantity in cart
  let productQuantity = cartProductsCopy[index].quantity;
  if (productQuantity > 1) {
    cartProductsCopy[index].quantity = productQuantity - 1;
  } else {
    cartProductsCopy.splice(index, 1);
  }

  // this.setState({
  //   cart: this.state.cart - 1,
  //   cartProducts,
  // });
  return cartProductsCopy;
};

export const searchProductByName = (searchTerm) => {
  if (!searchTerm) {
    return null;
  }
  searchTerm = searchTerm.toLowerCase();
  let allProducts = [...products];
  let matchingProducts = allProducts.filter((product) => {
    let productName = product.name.toLowerCase();
    return productName.includes(searchTerm);
  });
  return matchingProducts;
};
