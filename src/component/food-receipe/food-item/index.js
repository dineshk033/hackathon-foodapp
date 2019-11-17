import React, { useState } from 'react';
import { connect } from 'react-redux';

import './food-item.css';
import { addCart } from '../../../redux/action'
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function FoodItem({ itemname, price, availabletime, image, addCart }) {
    const [cart, setCart] = useState({ itemname: itemname, price: price, qty: 1 })
    return <div className="card ">
        <img src={image} alt={itemname} style={{ width: '100%' }} />
        <p >
            <span className="receipe-title">{toTitleCase(itemname)}</span>
            <span className="price">${price}</span>
        </p>
        <div className="cart">
            <div>
                <i className="fa fa-minus-circle cart-icon"
                    aria-hidden="true"
                    onClick={() => cart.qty > 1 ? setCart({ ...cart, qty: cart.qty - 1 }) : ''}>
                </i>
                <span>{cart.qty}</span>
                <i className="fa fa-plus-circle cart-icon"
                    aria-hidden="true"
                    onClick={() => setCart({ ...cart, qty: cart.qty + 1 })}>
                </i>
            </div>
            <button className="cart-button" onClick={() => addCart(cart)}>
                Add to Cart
            </button>
        </div>
    </div>
}

export default connect('', { addCart })(FoodItem);