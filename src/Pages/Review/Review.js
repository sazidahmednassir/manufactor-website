import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import ReviewRow from './ReviewRow';

const Review = () => {
    const [reviews, setReview]=useState([])
    const [Reload, setReload] = useState(true);
  

    useEffect(()=>{
        fetch('https://stormy-hamlet-97462.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>{setReview(data)
            setReload(false)})
    },[reviews])

    if(Reload){
        return <Loading></Loading>
    }
    return (
        <div class="w-full mx-5 lg:mx-0">
           <div className='w-full'> <h4 className='my-3 lg:mx-0 text-2xl text-primary text-center w-full mx-2
           lg:my-12'>Our Reviews</h4></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
            reviews.map( review=><ReviewRow key={review._id} review={review} ></ReviewRow>)
            }
            </div>
           
        
        </div>
    );
};

export default Review;