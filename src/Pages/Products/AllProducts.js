import React, { useEffect, useState } from 'react';
import AllProduct from './AllProduct';

const AllProducts = () => {
    const [products, setProduct]=useState([])

    useEffect(()=>{
        fetch('https://stormy-hamlet-97462.herokuapp.com/products/')
        .then(res=>res.json())
        .then(data=>setProduct(data))

    },[])
    return (
        <div>
           <h4 className='text-4xl text-primary text-center sm:w-full px-32 mx-5 
           lg:my-12 '>All Products</h4>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                   products.map(product=><AllProduct key={product._id} product={product} ></AllProduct>)
               }

           </div>
            
        </div>
    );
};

export default AllProducts;