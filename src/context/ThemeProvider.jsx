import React, { Component } from 'react'
import { TweenMax, Bounce } from 'gsap';

import ThemeContext from './ThemeContext';

export default class ThemeProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            darkTheme: false,
            changeTheme: this.changeTheme.bind(this)
        }


    }
  
    changeTheme() {
        console.log('changeTheme called');
        this.setState({
            darkTheme: !this.state.darkTheme
        });
    }
  
    render() {
        let themeClass = this.state.darkTheme == true ? 'ThemeDark' : '';
      return (
        <ThemeContext.Provider
            value={{ ...this.state }}
            >
            <div className={themeClass}>
                {this.props.children}
            </div>
        </ThemeContext.Provider >
      )
    }
  }
  
