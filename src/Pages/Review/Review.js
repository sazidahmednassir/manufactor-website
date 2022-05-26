import React, { useEffect, useState } from 'react';
import ReviewRow from './ReviewRow';

const Review = () => {
    const [reviews, setReview]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[reviews])
    return (
        <div>
            <h4 className='text-4xl text-primary text-center sm:w-full px-32 mx-5 
           lg:my-12 '>Our Reviews</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
            reviews.map( review=><ReviewRow key={review._id} review={review} ></ReviewRow>)
            }
            </div>
           
        
        </div>
    );
};

export default Review;