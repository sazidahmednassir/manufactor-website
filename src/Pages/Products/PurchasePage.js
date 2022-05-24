import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../firebase.init";

const PurchasePage = ({ setReload }) => {
  const { productid } = useParams();
  const [product, setProduct] = useState({});
  const [control, setControl] = useState(false);
  const [agree, setAgree] = useState(true);
  const [user, loading] = useAuthState(auth);

 

  useEffect(() => {
    const url = `http://localhost:5000/products/${productid}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [control]);

  const handleQuantityChange=(event)=>{
      const userQuan= parseInt(event.target.value)
      console.log(product.availableQuantity)
      console.log(product.minimum)
      console.log(userQuan)

      if(userQuan > product.availableQuantity || userQuan <product.minimum ){
        setAgree(false)
        return toast( `Give value Greater than ${product.minimum} less than ${product.availableQuantity} `);
      }else{
          setAgree(true)
      }

    }

    const handleOrder = event => {
        event.preventDefault();
        const upQuan= parseInt(event.target.order.value)
        const newQuan= product.availableQuantity- upQuan;
        const total=product?.price * upQuan;
        console.log('hello')
        console.log(newQuan)

        if(event.target.address.value=="" && event.target.phone.value=="" ){
            return toast('Enter Your Address & Phone Number')
        }

        if(event.target.address.value==""){
            return toast('Enter Your Address')
        }

        if(event.target.phone.value==""){
            return toast('Enter Your Phone Number')
        }
        
        let order = {
            productId: productid ,
            tool: product?.name,
            price: product?.price,
            // availableQuantity: newQuan,
            totalprice: total,
            quantity: event.target.order.value,
            user: user?.email,
            userName: user?.displayName,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        console.log(order)

        fetch(`http://localhost:5000/order/${productid}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify({order, newQuan})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setControl(!control)
        })

    }

  return (
    <div className="flex justify-center content-center my-5">
      <div class="card  w-96   bg-base-100 shadow-xl">
        <figure>
          <img src={product.img} alt={product.name} />
        </figure>
        <div class="card-body">
          <h2 class="card-title font-bold"> Product Name : {product?.name}</h2>
          <h3 class="card-title font-bold text-red-500">
            {" "}
            Product Price : {product?.price}
          </h3>
          <h3 class="card-title text-green-500">
            {" "}
            Available Quantity : {product.availableQuantity}
          </h3>
          <h3 class="card-title font-bold text-yellow-500">Minimum order quantity : {product.minimum}</h3>
          <form onSubmit={handleOrder} className='flex flex-col w-full max-w-lg m-auto '  >
          <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs"  value={user?.displayName}/>
          <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs my-2"  value={user?.email}/>
          <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2" for="orders">
        Orders Quantity
      </label>
      <input name='order' onBlur={handleQuantityChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="orders" type="number" placeholder="Doe" defaultValue={product.minimum} />
    </div>
    <div class="form-control">
  <label class="label" for ="address">
    <span class="label-text">Your Address</span>
   
  </label> 
  <textarea name='address' class="textarea textarea-bordered h-24" placeholder="Your Address" id="address"></textarea>
  
  <label class="label">
    {/* <span class="label-text-alt">Your Address</span> */}
    
  </label> 
</div>
<div class="form-control w-full max-w-xs">
  <label class="label" for="phone">
    <span class="label-text">Your Phone</span>
    
  </label>
  <input name='phone' type="text" placeholder="Type Your Phone Number" class="input input-bordered w-full max-w-xs" id="phone"/>
  
  <label class="label">
    {/* <span class="label-text-alt">Alt label</span> */}
    
  </label>
</div>
          <div class="card-actions justify-end">
            <button disabled={!agree} class="btn btn-primary" type="submit">Order Now</button>
          </div>
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
