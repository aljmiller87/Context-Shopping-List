import React, { Component } from 'react';
import './scss/styles.scss';
import Cart from './components/Cart.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';
import MyProvider from './context/Provider.jsx';
import ReactLoading from 'react-loading';
import {TimelineMax} from 'gsap';


import FooterImg from './images/footer.jpg';

// First, make a new context
const AppContext = React.createContext();

// Second, create a provider component, (similar to redux) this will be top level component
class AppProvider extends Component {
  constructor(props) {
    super(props)
  
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
      <MyProvider>
        <div>
            <ReactLoading type="spokes" color="#000000" height={75} width={75} className="LoadingElement"/>
            <Cart />
            <Header />              
            <ProductList />            
            <Footer img={FooterImg} />            
        </div>  
      </MyProvider>     
    );
  }
}

export default App;
