import React, { Component } from 'react'

import ThemeContext from './ThemeContext';

export default class ThemeProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            darkTheme: false,
            changeTheme: this.changeTheme.bind(this)
        }


    }

    // Checks if state exists in local storage
    componentDidMount() {
        let state = JSON.parse(window.localStorage.getItem("saved_theme"));
  
        if (state) {
          this.setState({
            darkTheme: state.darkTheme
          });
        }
    }
    
    // Sets state in local storage
    componentDidUpdate() {
        let state = {
            darkTheme: this.state.darkTheme
        };
        window.localStorage.setItem("saved_theme", JSON.stringify(state))
    }
  
  
    changeTheme() {
        this.setState({
            darkTheme: !this.state.darkTheme
        });
    }
  
    render() {
        let themeClass = this.state.darkTheme === true ? 'ThemeDark' : '';
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
  
