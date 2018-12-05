import React, { Component } from 'react';
import './scss/styles.scss';
import Cart from './components/Cart.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';
import MyProvider from './context/Provider.jsx';
import MyConsumer from './context/Consumer.jsx';

// import Family from './components/Family.jsx';
// import Person from './components/Person.jsx';


import FooterImg from './images/footer.jpg';

// First, make a new context
const AppContext = React.createContext();

// Second, create a provider component, (similar to redux) this will be top level component
class AppProvider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      cart: 0,
      name: 'Alex',
      age: 31,
      cool: true,

      
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
    this.state = {
      
    }


  }

 


  render() {  
      
    return (      
      <MyProvider>
        <div>
            <Cart />
            <Header />
            
            <button onClick={this.addToCart}>Add to cart</button>
            
            {/* <ProductList products={this.state.products} addToCart={this.addToCart}/> */}
            <ProductList />            

            <Footer img={FooterImg} />
            
        </div>  
      </MyProvider>     
    );
  }
}

export default App;
