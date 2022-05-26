import React from 'react';

const MordersRow = ({order, index}) => {
    return (
        <tr>
            <th>{index+1}</th>
            
            <td>{order.tool}</td>
            <td>{order.price}</td>
            <td>{order.totalprice}</td>
            <td>{order.quantity}</td>
            <td>{order.user}</td>
            <td>{order.address}</td>
            <td>{order.phone}</td>
            <td >{!order.paid? <button className='btn btn-xs btn-success text-red-500'>unpaid</button>: <button className='btn btn-xs btn-success'>{order.transactionId}</button>}</td>
            <td>{order.status}</td>
            
            <td><button className='btn btn-xs btn-success'>Update</button></td>
            {/* <td>{role !== 'admin' && <button  class="btn btn-xs">Make Admin</button>}</td> */}
            {/* <label onClick={() => setDeletingProduct(product)} for="delete-confirm-modal" class="btn btn-xs py-1 my-3">Delete </label> */}
            
            {/* <td><Link to='/modal'>Delete Product</Link></td> */}
        </tr>
    );
};

export default MordersRow;