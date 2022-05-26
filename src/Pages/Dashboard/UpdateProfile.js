import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';

const UpdateProfile = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user.email)
    const email=user.email;
    const handleOrder=(event)=>{
        event.preventDefault();
        console.log(event)
        const user={
            name :event.target.name.value,
            img:event.target.img.value,
            add:event.target.add.value,
            ed:event.target.ed.value,
            ph: event.target.ph.value,
            fb: event.target.fb.value,
            email:email
    
        }
        if(event.target.img.value==""){
            return toast('Enter Your Image Url')
        }

        if(event.target.name.value==""){
            return toast('Enter Your Name')
        }
        if(event.target.ed.value==""){
            return toast('Enter Your Education')
        }

        if(event.target.add.value==""){
            return toast('Enter Your Address')
        }
         
        if(event.target.ph.value==""){
            return toast('Enter Your Phone Number')
        }
       
        if(event.target.fb.value==""){
            return toast('Enter Your Facebook link')
        }

        const url=`https://stormy-hamlet-97462.herokuapp.com/users/${email}`
        fetch(url, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(user),
          
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged==true){
                toast('User Updated');
                event.target.reset();
            }else{
                toast('Add the Info Correctly');
                event.target.reset();
            }
        })

    }
    return (
        <div>
            <form
        onSubmit={handleOrder}
        className="flex flex-col w-full max-w-lg my-2 "
      >
        <input id='name'
          type="text"
          placeholder="Name"
          class="input input-bordered input-accent w-full max-w-xs"
          
        />
        <input id='ed'
          type="text"
          placeholder="Education"
          class="input input-bordered input-accent w-full max-w-xs my-3"
          
        />
      
      <input
          type="text"
          placeholder="Enter Your Image Url"
          class="input input-bordered w-full max-w-xs py-2 my-2"
          id='img'
         
        />
        <div class="form-control">
          <label class="label" for="add">
            <span class="label-text">Your  Address</span>
          </label>
          <textarea
            name="add"
            class="textarea textarea-bordered h-24"
            placeholder="comments"
            id="comments"
          ></textarea>

          <label class="label">
            {/* <span class="label-text-alt">Your Address</span> */}
          </label>
        </div>
        <div class="form-control">
          <label class="label" for="ph">
            <span class="label-text">Your  Phone Number</span>
          </label>
          <input
            name="number"
            class="input input-bordered input-accent w-full max-w-xs"
            placeholder="Your  Phone Number"
            id="ph"
          ></input>

        
        </div>
        <div class="form-control">
          <label class="label" for="fb">
            <span class="label-text">Your  Facebook Link</span>
          </label>
          <input
            name="text"
            class="input input-bordered input-accent w-full max-w-xs"
            placeholder="Your  Facebook link"
            id="fb"
          ></input>

        
        </div>
     
        <div class="card-actions justify-start my-4">
          <button class="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
        </div>
    );
};

export default UpdateProfile;