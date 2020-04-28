import React, { createContext, useReducer, useEffect } from "react";

/* ******
  #1 Create Context
*/
export const ShoppingCartContext = createContext();

/* ******
  #2 Create Initial State
*/
const savedCart = JSON.parse(window.localStorage.getItem("saved_context_cart"));
const emptyCart = {
  cartProducts: [],
  cart: 0,
};
const initialState = savedCart ? savedCart : emptyCart;

/* ******
  #3 Create Reducer
*/

let reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD_TO_CART": {
      console.log("ADD_TO_CART action");
      const cartNumber = state.cart + 1;
      return { ...state, cart: cartNumber, cartProducts: action.payload };
    }
    case "REMOVE_FROM_CART": {
      console.log("REMOVE_FROM_CART action");
      const cartNumber = state.cart - 1;
      return { ...state, cart: cartNumber, cartProducts: action.payload };
    }
    case "CLEAR_CART": {
      console.log("CLEAR_CART action");
      return { ...state, cart: 0, cartProducts: [] };
    }
  }

  return state;
};

/* ******
  #4 Create Provider
*/
export const ShoppingCartProvider = (props) => {
  /* ******
    #4.a Assign useReducer
  */
  const [state, dispatch] = useReducer(reducer, initialState);

  /* ******
    #4.b Assign value with variables from useReducer
  */
  const value = { state, dispatch };

  useEffect(() => {
    window.localStorage.setItem("saved_context_cart", JSON.stringify(state));
  }, [state]);

  /* ******
      #4.c Return Provider with value
    */

  return (
    <ShoppingCartContext.Provider value={value}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
