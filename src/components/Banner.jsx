import React, { Component } from 'react'


export default class Banner extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            
        }
    }

    render() {

        return (


            <div className="home">
                <div className="home_container">
                    <div className="home_background" style={this.props.bannerStyle}></div>
                    <div className="home_content_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="home_content">
                                        <div className="breadcrumbs">
                                            <ul>
                                                <li><a href="index.html">Home</a></li>
                                                <li>Checkout</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

