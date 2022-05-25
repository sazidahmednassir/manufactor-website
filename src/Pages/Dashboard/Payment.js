import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L12G5E7oe4OQujD2P6Owg8hg7iqR6b6KDm5Aa1bNP6yWP9sXqaCRxrFZhpg3xhiqOTf95MwqtnZhc7toQl7vvws00074HQHZu');

const Payment = () => {
    const {id}=useParams();
    const url=`http://localhost:5000/order/${id}`
    const {data: order, isLoading}=useQuery(['booking', id], ()=>fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }}).then((res)=>res.json()))

        if(isLoading){
            return <Loading></Loading>
        }
    return (
        <div>
             <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <p className="text-success font-bold">Hello, {order.userName}</p>
                <h2 class="card-title">Please Pay for {order.tool}</h2>
                <p>Your Order <span className='text-orange-700'>{order.tool}</span> {order.quantity} Quantity</p>
                <p>Please pay: ${order.price}</p>
            </div>
        </div>
        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm  order={order} />
                </Elements>
            </div>
        </div>
        </div>
    );
};

export default Payment;