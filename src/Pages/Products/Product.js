import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product, setReload}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src= {product.img}   alt={product.name} class="rounded-xl w-max h-4/5" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-bold"> Product Name : {product.name}</h2>
          <h3 class="card-title font-bold text-red-500"> Product Price : {product.price}</h3>
          <h3 class="card-title text-green-500"> Available Quantity : {product.availableQuantity}</h3>
          <h3 class="card-title font-bold text-yellow-500">Minimum order quantity : {product.minimum}</h3>
          <p >{product.description}</p>
          <div class="card-actions">
           
            <Link class="btn btn-primary" to={`/products/${product._id}` } setReload={setReload} >Order Now</Link>
          </div>
        </div>
      </div>
    );
};

export default Product;