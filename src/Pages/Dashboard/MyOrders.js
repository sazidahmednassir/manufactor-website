import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import MorderModal from "./MorderModal";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const [deleteOrder, setDelete]=useState(null)
  const [control, setControl]=useState(false)

  

  useEffect(() => {
    if (user) {
      fetch(`https://stormy-hamlet-97462.herokuapp.com/orders?user=${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user, control]);

  
  return (
    <div>
      <h1 className="my-5">My Orders: {orders.length}</h1>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Name</th>
              <th>Parts</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{o.user}</td>
                <td>{o.userName}</td>
                <td>{o.tool}</td>
                <td>{o.price}</td>
                <td>{o.totalprice}</td>
                <td>{o.quantity}</td>
                <td>{(o.price && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                {(o.price && o.paid) && 
                                        <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{o.transactionId}</span></p>
                                    </div>
                                        
                                    } </td>
                                    <td>{(o.price && !o.paid) && <label onClick={()=>{setDelete(o)}} for="delete-modal" class="btn btn-xs btn-success">Cancel</label>}</td>
                                    
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && <MorderModal 
      deleteOrder ={deleteOrder }
      setDelete={setDelete}
      control={control}
      setControl={setControl}
      ></MorderModal>}
    </div>
  );
};

export default MyOrders;
