import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Products.css';

const Products = () => {

    const [products, setProducts]=useState([]);
    const [Reload, setReload] = useState(false);

    useEffect(()=>{
        fetch(`https://stormy-hamlet-97462.herokuapp.com/products?limit=6`)
        .then(res=>res.json())
        .then(data=>{setProducts(data)
            setReload(!Reload)})

    }, [products, Reload])

    return (
        <div >
           <h4 className='text-2xl text-primary text-center sm:w-full px-32 
           lg:my-12'>Available Products</h4>
           <div className='grid grid-cols-1 cus md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                   products.map(product=><Product key={product._id} product={product} ></Product>)
               }

           </div>
            
        </div>
    );
};

export default Products;