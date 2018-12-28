import './scss/styles.scss';
import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import ReactLoading from 'react-loading';
import {TimelineMax} from 'gsap';

import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';
import FooterImg from './images/footer.jpg';

// Providers
import ShoppingCartProvider from './context/ShoppingCartProvider.jsx';
import ThemeProvider from './context/ThemeProvider.jsx';
// End Providers


class App extends Component {
  constructor() {
    super();
    this.initProductAnimation = this.initProductAnimation.bind(this);
  }

  componentDidMount() {
    this.initProductAnimation();
  }

  initProductAnimation() {
    const tl = new TimelineMax();
    tl
      .to(".LoadingElement", .5, {opacity:0, delay: 1.25})
      .from(".header", .25, {opacity:0, yPercent: -100})
      .staggerFrom('.product', 0.25, {y:100, opacity:0, delay: .2}, .075);
  }


  render() {  
    return (      
      <ThemeProvider>
        <div>
            <ReactLoading type="spokes" color="#000000" height={75} width={75} className="LoadingElement"/>
            <ShoppingCartProvider>
                <Cart />                          
                <Header />         
                <Router history={hashHistory}>
                    <Route path="/" component={ProductList} />
                    <Route path="/checkout" component={Checkout} />
                </Router>         
            </ShoppingCartProvider>                     
            <Footer img={FooterImg} />            
        </div>        
      </ThemeProvider> 
    );
  }
}

export default App;
