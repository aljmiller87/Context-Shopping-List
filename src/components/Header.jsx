import React, { Component } from 'react';
import SearchIcon from './../images/search.svg'
import ShoppingIcon from './../images/shopping.svg'

export default class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    render() {

        return (

            <header className="header">
              <div className="header_container">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="header_content d-flex flex-row align-items-center justify-content-start">
                        <div className="logo"><a href="#">React Context</a></div>
                        <div className="header_extra ml-auto">
                          <div className="shopping_cart">
                            <button>
                              {/* <ShoppingCartIcon /> */}
                              <div>Cart <span>({this.props.cart})</span></div>
                            </button>
                          </div>
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
    
}