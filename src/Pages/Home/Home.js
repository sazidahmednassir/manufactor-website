import React from 'react';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Banner from './Banner';
import Business from './Business';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <Business></Business>
        </div>
    );
};

export default Home;