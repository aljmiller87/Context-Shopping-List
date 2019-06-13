import React from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from './../images/search.svg'
import ShoppingIcon from './../images/shopping.svg'

import ShoppingCartContext from '../context/ShoppingCartContext';
// import ThemeContext from '../context/ThemeContext';
import Search from '../formik/search';
import Toggle from './Toggle';

const iconStyle = {
    height: '20px',
    width: '20px'
}

const Header = (props) => {

    return (

        <header className="header">
            <div className="header_container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                <div className="logo">
                                    <Link to="/">React Context</Link>
                                </div>
                                <nav className="main_nav">
                                    <ul>
                                        <li>
                                            <Link to="/checkout">Checkout</Link>
                                        </li>
                                        <li>
                                            Dark Theme Toggle:
                                        </li>
                                        <li>
                                            <Toggle />
                                        </li>
                                    </ul>
                                </nav>

                                    {/* <ShoppingCartIcon /> */}
                                    <ShoppingCartContext.Consumer>
                                    {(context) => (
                                        <div className="header_extra ml-auto">
                                            <div className="shopping_cart">
                                                <img src={ShoppingIcon} style={iconStyle} alt=""/>
                                                <button onClick={() => context.cartTrigger()}>
                                                    <div className="cartButton">Cart (
                                                    <span>{context.cart}</span>
                                                    )
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="search">
                                                <div className="search_icon">
                                                    <img src={SearchIcon} style={iconStyle} alt=""/>
                                                </div>
                                            </div>
                                            {/* <div className="hamburger"><i className="fa fa-bars" aria-hidden="true"></i></div> */}
                                        </div>
                                    )}
                                    </ShoppingCartContext.Consumer>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ShoppingCartContext.Consumer>
                {(context) => (
                    <Search search={context.searchProductByName} />
                )}
            </ShoppingCartContext.Consumer>
        </header>
    )
}

export default Header;