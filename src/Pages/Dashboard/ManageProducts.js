import React, { useEffect, useState } from 'react';
import DeleteConfirmModal from './DeleteConfirmModal';
import ProductRow from './ProductRow';

const ManageProducts = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);
    const [products, setProduct]=useState([])
    const [control, setControl]=useState(false)

    useEffect(()=>{
        fetch('https://stormy-hamlet-97462.herokuapp.com/products/')
        .then(res=>res.json())
        .then(data=>setProduct(data))

    },[products, control])
    return (
        <div>
             <h2 className="text-2xl">All Products: {products?.length}</h2>
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
              <th>Action</th>
             
             
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
                          setDeletingProduct={setDeletingProduct}
                           ></ProductRow>)
                       }
          </tbody>
        </table>
      </div>
      {deletingProduct && <DeleteConfirmModal
                deletingProduct={deletingProduct}
                control={control}
                setControl={setControl}
                setDeletingProduct={setDeletingProduct}
            ></DeleteConfirmModal>}
            
        </div>
    );
};

export default ManageProducts;