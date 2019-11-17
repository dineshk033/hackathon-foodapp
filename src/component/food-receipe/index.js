import React from 'react';

import FoodList from './food-list';
import Cart from '../cart/cart';
const FoodReceipe = () => {
    return <div style={{ width: '100%' }}>
        <div className="col-75">
            <FoodList />
        </div>
        <div className="col-25">
            <Cart />
        </div>
    </div>
}

export default FoodReceipe;