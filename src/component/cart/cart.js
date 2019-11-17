import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ cart }) => {
    return <div className="cart-card">
        <h3 style={{ textAlign: 'center' }}>CheckOut</h3>
        {cart.length > 0 ? cart.map((el, idx) => <h4 key={idx}>
            {el.itemname}
            <span style={{ float: 'right' }}>Rs.{el.price}</span>
            <span style={{ float: 'right' }}>{el.qty + ' x '} </span>
        </h4>) : <h5 style={{ textAlign: 'center' }}>No item added in cart</h5>}
    </div>
}

const mapStateToProps = (state) => {
    return { cart: state }
}
export default connect(mapStateToProps)(Cart);