import React from 'react';
import { toast } from 'react-toastify';

const MordersRow = ({order, index, control, setControl}) => {

   

    const handleDelete=order=>{
        const orderid=order._id;

        fetch(`https://stormy-hamlet-97462.herokuapp.com/order/${orderid}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }

        })
        .then(res=>res.json())
        .then(data=>{
            console.log('data deleted', data)
            toast('Order Delected')
            setControl(!control)
        })
    }

    const handleStatus=order=>{
        const  status={
            status:"Shipped"
        }

        const orderid=order._id;
        fetch(`https://stormy-hamlet-97462.herokuapp.com/status/${orderid}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }, 
            body: JSON.stringify(status)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('data updated', data)
            toast('Order Status Updated')
            setControl(!control)
        })
    }
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
            <td className='text-success'>{order.status}</td>
            
           
            <td>{!order.paid?<button onClick={()=>{ handleDelete(order) }} className='btn btn-xs btn-success'>Delete</button>: <button onClick={()=>{ handleStatus(order) }} className='btn btn-xs btn-success'>Update</button> }</td>
            
        </tr>
    );
};

export default MordersRow;