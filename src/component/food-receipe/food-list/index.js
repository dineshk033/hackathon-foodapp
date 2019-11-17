import React, { useEffect, useState } from 'react';
import axios from 'axios';
import faker from 'faker';
import { connect } from 'react-redux';

import FoodItem from '../food-item';

const FoodList = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios('https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json');
            setData(response.data);
        }
        fetchData();
    }, [])

    return <div style={{ display: 'flex', flexWrap: 'wrap', padding: '14px', justifyContent: 'center' }}>
        {
            data.map((receipe, idx) => {
                const image = faker.image.food();
                return <FoodItem key={idx} {...receipe} image={image} />
            })
        }
    </div>
}

const mapStateToDispatch = (state) => {
    return { cart: state }
}

export default connect(mapStateToDispatch)(FoodList);