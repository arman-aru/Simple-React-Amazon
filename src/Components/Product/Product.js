import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" srcset="" />
            <h3>{name}</h3>
            <h5>Brand: {seller}</h5>
            <h3>Price: ${price}</h3>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
            <p className='btn-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
        
    );
};

export default Product;