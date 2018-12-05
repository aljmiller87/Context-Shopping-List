import React, { Component } from 'react'
// import MyContext from './../context/MyContext.jsx';

export default class Person extends Component {
    render() {
        return (
            <div className="person">
                {/* The child of a context consumer is always a function */}
                <MyContext.Consumer>                    
                    {(context) => (<p>Hey, I'm {context.name}</p>)}   
                </MyContext.Consumer>    
                
            </div>
        )
    }
}