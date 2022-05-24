import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [products, setProducts]=useState([]);
    const [Reload, setReload] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:5000/products?limit=6`)
        .then(res=>res.json())
        .then(data=>{setProducts(data)
            setReload(!Reload)})

    }, [products, Reload])

    return (
        <div>
           <h4 className='text-4xl text-primary text-center sm:w-full px-32 mx-5 
           lg:my-12 '>Available Products</h4>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                   products.map(product=><Product key={product._id} product={product} setReload={setReload} ></Product>)
               }

           </div>
            
        </div>
    );
};

export default Products;