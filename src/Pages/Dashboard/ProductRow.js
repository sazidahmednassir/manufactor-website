import React from 'react';

const ProductRow = ({product, index,  control, setcontrol}) => {
    console.log(product)
    const {name, price, description, availableQuantity, minimum, supplier, img}=product
    return (
        <tr>
            <th>{index+1}</th>
            <td>{img}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{description}</td>
            <td>{availableQuantity}</td>
            <td>{minimum}</td>
            <td>{supplier}</td>
            {/* <td>{role !== 'admin' && <button  class="btn btn-xs">Make Admin</button>}</td> */}
            <td><button class="btn btn-xs">Delete Product</button></td>
        </tr>
    );
};

export default ProductRow;