import React from 'react';

const ProductRow = ({product, index,  control, setcontrol, setDeletingProduct}) => {
    console.log(product)
    const {name, price, description, availableQuantity, minimum, supplier, img}=product


    return (
        <tr>
            <th>{index+1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{description}</td>
            <td>{availableQuantity}</td>
            <td>{minimum}</td>
            <td>{supplier}</td>
            {/* <td>{role !== 'admin' && <button  class="btn btn-xs">Make Admin</button>}</td> */}
            <label onClick={() => setDeletingProduct(product)} for="delete-confirm-modal" class="btn btn-xs py-1 my-3">Delete </label>
            
            {/* <td><Link to='/modal'>Delete Product</Link></td> */}
        </tr>
    );
};

export default ProductRow;