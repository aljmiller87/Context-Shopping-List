import React from 'react';
import { Link } from 'react-router';

const Product = (props) => {
    let imageURL = `images/${props.image}`;
    let optionClass;
    let optionText = props.option;
    switch (props.option) {
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
                <div className="product_title" onClick={() => {props.closeCart()}}><Link to={`/products/${props.id}`}>{props.name}</Link></div>
                <div className="product_price">${props.price}</div>
                <button onClick={() => props.addToCart(props.id)} className="newsletter_button trans_200"><span>Add to Cart</span></button>                    
            </div>
        </div>
    )
}

export default Product;