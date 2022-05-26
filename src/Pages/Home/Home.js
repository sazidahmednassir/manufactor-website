import React from 'react';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
        </div>
    );
};

export default Home;