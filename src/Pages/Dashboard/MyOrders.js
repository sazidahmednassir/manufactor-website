import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders]=useState([]);

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/orders?user=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
        }
    }, [user])
    return (
        <div>
            <h1 className='my-5'>My Orders: {orders.length}</h1>
            <div class="overflow-x-auto">
  <table class="table table-compact w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Parts</th>
        <th>Price</th>
        <th>Total Price</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map(o=>   <tr>
                <th>1</th>
                <td>{o.user}</td>
                <td>{o.userName}</td>
                <td>{o.tool}</td>
                <td>{o.price}</td>
                <td>{o.totalprice}</td>
                <td>{o.quantity}</td>
              </tr>)
        }
    

    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;