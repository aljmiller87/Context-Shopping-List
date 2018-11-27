import React, { Component } from 'react';
import './scss/styles.scss';
// import { Cart } from 'components/Cart';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';


import FooterImg from './images/footer.jpg';

const AppContext = React.createContext();

class AppProvider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      cart: 0,
      products: [
        {
          image: "product_1.jpg",
          name: "Smart Phone",
          price: 670,
          option: "New"
        },
        {
          image: "product_2.jpg",
          name: "Speaker",
          price: 90,
          option: "Sale"
        },
        {
          image: "product_3.jpg",
          name: "Cable",
          price: 15,
          option: "Default"
        },
        {
          image: "product_4.jpg",
          name: "Computer",
          price: 1250,
          option: "Default"
        },
        {
          image: "product_5.jpg",
          name: "Headphones",
          price: 65,
          option: "Default"
        },
        {
          image: "product_6.jpg",
          name: "Tablet",
          price: 590,
          option: "Popular"
        },
        {
          image: "product_7.jpg",
          name: "Budget Smart Phone",
          price: 190,
          option: "Hot"
        },
        {
          image: "product_8.jpg",
          name: "Keyboard",
          price: 45,
          option: "Default"
        }
      ]
    }
  }
  
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {}

    this.addToCart = this.addToCart.bind(this);

  }

  addToCart() {
    this.setState((prevState, props) => {
      return ({
         cart: prevState.cart+1
      })
    });

  }


  render() {  
      
    return (
      <AppProvider>
        <div>
          <AppContext.Consumer>
            {(context) => context.state}
            <Header cart={this.state.cart}/>
            <button onClick={this.addToCart}>Add to cart</button>
            <ProductList products={this.state.products} addToCart={this.addToCart}/>
            <Footer img={FooterImg} />
            </AppContext.Consumer>
        </div>
      </AppProvider>
    );
  }
}

export default App;
