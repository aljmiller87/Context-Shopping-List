import React, { Component } from 'react'
export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
    }

    render() {
        let imageURL = `images/${this.props.image}`;
        let optionClass;
        let optionText = this.props.option;
        switch (this.props.option) {
            case "New":
                optionClass = "product_extra product_new";
                break;
            case "Sale":
                optionClass = "product_extra product_sale";
                break;
            case "Popular":
                optionClass = "product_extra product_hot";
                break;
            case "Hot":
                optionClass = "product_extra product_sale";
                break;
            default:
                optionClass = "product_extra";
                optionText = '';
        }
	    return (
            <div className="product">
                <div className="product_image"><img src={imageURL} alt=""/></div>
                <div className={optionClass}>{optionText}</div>
                <div className="product_content">
                    <div className="product_title"><a href="product.html">{this.props.name}</a></div>
                    <div className="product_price">${this.props.price}</div>
                    <button className="trans_200"><span>Add to Cart</span></button>
                </div>
            </div>
        )
    }
}
