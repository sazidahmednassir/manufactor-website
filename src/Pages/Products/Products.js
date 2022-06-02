import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import Product from './Product';
import './Products.css';

const Products = () => {

    const [products, setProducts]=useState([]);
    const [Reload, setReload] = useState(true);
    
  


    useEffect(()=>{
       
        fetch(`https://stormy-hamlet-97462.herokuapp.com/products?limit=6`)
        .then(res=>res.json())
        .then(data=>{setProducts(data)
           
            setReload(false)})

    }, [products, Reload])

   if(Reload){
       return <Loading></Loading>
   }

    return (
        <div >
           <div className='w-full'><h4 className='text-2xl text-primary text-center w-full mx-6
           lg:my-12'>Available Products</h4></div>
           <div className='w-full mx-6 lg:mx-0'>
           <div className='grid grid-cols-1 cus md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                   products.map(product=><Product key={product._id} product={product} ></Product>)
               }

           </div>
            
        </div>
           </div>
         
    );
};

export default Products;