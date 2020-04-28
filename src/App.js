import "./scss/styles.scss";
import React, { Component, Fragment } from "react";
import ReactLoading from "react-loading";
import { TimelineMax } from "gsap";

// Components
import Cart from "./components/Cart.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import FooterImg from "./images/footer.jpg";
// End Components

// Utilities
import Helpers from "./utils/helpers";
// End Utilities

// Providers
import { ShoppingCartProvider } from "./context/ShoppingCartProvider.jsx";
import { ThemeContextProvider } from "./context/ThemeProvider";
// End Providers

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpersLoaded: false,
    };
    Helpers();
    this.initProductAnimation = this.initProductAnimation.bind(this);
  }

  componentDidMount() {
    this.initProductAnimation();
  }

  initProductAnimation() {
    const tl = new TimelineMax();
    tl.to(".LoadingElement", 0.5, { opacity: 0, delay: 1.25 })
      .from(".header", 0.25, { opacity: 0, yPercent: -100 })
      .staggerFrom(".product", 0.25, { y: 100, opacity: 0, delay: 0.2 }, 0.075);
  }

  render() {
    return (
      <ThemeContextProvider>
        <Fragment>
          <ReactLoading
            type="spokes"
            color="#000000"
            height={75}
            width={75}
            className="LoadingElement"
          />
          <ShoppingCartProvider>
            <Cart />
            <Header />
            {this.props.children}
          </ShoppingCartProvider>
          <Footer img={FooterImg} />
        </Fragment>
      </ThemeContextProvider>
    );
  }
}

export default App;
