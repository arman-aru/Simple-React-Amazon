import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    let grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h5>Selected Items: {cart.length}</h5>
            <h5>Total Price: ${total}</h5>
            <h5>Total Shipping Charge: ${shipping}</h5>
            <h5>Total Tax: ${tax}</h5>
            <h2>Grand Total: ${grandTotal}</h2>
            <button  className='btn-clear'>
            <p className='btn-text'>Clear Cart</p>
            </button>
            <button  className='btn-total'>
            <p className='btn-text'>Review Order</p>
            </button>
        </div>
    );
};

export default Cart;