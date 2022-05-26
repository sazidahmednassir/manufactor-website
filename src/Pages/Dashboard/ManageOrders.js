import React, { useEffect, useState } from 'react';
import MordersRow from './MordersRow';

const ManageOrders = () => {
    const [orders, setOrders]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/mangeorder', {
            
                method: 'GET',
                headers:{
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
        })
        .then(res=>res.json())
        .then(data=>{setOrders(data)
        console.log(data)})
    },[orders])
    return (
        <div>
             <h2 className="text-2xl">All Products: {orders?.length}</h2>
             <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
            
              <th></th>
              <th>Tool Name</th>
              <th>Price</th>
              <th>Totalprice</th>
              <th>Quantity</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>paid</th>
              <th>Status</th>
              <th >Actions</th>
             
             
            </tr>
          </thead>
          <tbody>
          {/* {
                           products?.map((product, index)=><ProductRow
                           index={index}
                           key={product._id}
                           product={product}
                          
                           ></ProductRow>)
                       } */}
                       {
                           orders?.map((order, index)=><MordersRow index={index} key={order._id} order={order}></MordersRow>)
                       }
          </tbody>
        </table>
      </div>
      
            
        </div>
    );
};

export default ManageOrders;