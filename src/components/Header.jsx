import React from 'react';
import { Link } from 'react-router';
// import SearchIcon from './../images/search.svg'
import ShoppingIcon from './../images/shopping.svg'

import ShoppingCartContext from '../context/ShoppingCartContext';
import ThemeContext from '../context/ThemeContext';
import Toggle from './Toggle';

const shoppingIconStyle = {
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
                            <li>Dark Theme Toggle:</li>
                            <li>
                                <ThemeContext.Consumer>
                                {(context) => {
                                    return (
                                    
                                    <Toggle click={context.changeTheme} theme={context.darkTheme}/>
                                )}}          
                                </ThemeContext.Consumer>
                            </li>
                        </ul>
                    </nav>
                    <div className="header_extra ml-auto">
                        {/* <ShoppingCartIcon /> */}
                        <ShoppingCartContext.Consumer>
                        {(context) => (
                            <div className="shopping_cart">
                                <img src={ShoppingIcon} style={shoppingIconStyle} alt=""/>
                                <button onClick={() => context.cartTrigger()}>                                
                                    <div className="cartButton">Cart (
                                    <span>{context.cart}</span>
                                    )
                                    </div>
                                </button>
                            </div>
                        )}
                        </ShoppingCartContext.Consumer>
                        <div className="search">
                        <div className="search_icon">
                            {/* <SearchIcon /> */}
                        </div>
                        </div>
                        <div className="hamburger"><i className="fa fa-bars" aria-hidden="true"></i></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            
        </header>
    )   
}

export default Header;