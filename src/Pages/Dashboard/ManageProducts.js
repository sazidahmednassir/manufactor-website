import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const [products, setProduct]=useState([])
    const [control, setControl]=useState(false)

    useEffect(()=>{
        fetch('http://localhost:5000/products/')
        .then(res=>res.json())
        .then(data=>setProduct(data))

    },[products, control])
    return (
        <div>
             <h2 className="text-2xl">All Users: {products?.length}</h2>
             <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
            
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Available Quantity</th>
              <th>Minimum Quantity</th>
              <th>Supplier</th>
             
             
            </tr>
          </thead>
          <tbody>
          {
                           products?.map((product, index)=><ProductRow
                           index={index}
                           key={product._id}
                           product={product}
                          control={control}
                          setControl={setControl}
                           ></ProductRow>)
                       }
          </tbody>
        </table>
      </div>
            
        </div>
    );
};

export default ManageProducts;