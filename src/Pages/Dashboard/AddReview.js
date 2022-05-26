import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase.init";
const AddReview = () => {
  const [user, loading] = useAuthState(auth);

  const handleOrder = (event) => {
    event.preventDefault();
    const review={
        name :event.target.name.value,
        img:event.target.img.value,
        comments:event.target.comments.value,
        star: event.target.star.value

    }

    if(event.target.img.value==""){
        return toast('Enter Your Image Url')
    }

    if(event.target.comments.value==""){
        return toast('Enter Your Comments')
    }
    if(event.target.star.value==""){
        return toast('Enter Your Star')
    }
    fetch('https://stormy-hamlet-97462.herokuapp.com/review', {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(review),
      })
      .then(res=>res.json())
      .then(inserted=>{
        if (inserted.insertedId) {
            toast.success("Review added successfully");
            event.target.reset();
          } else {
            toast.error("Failed to add the Review");
           event.target.reset();
          }
      })
    
  
  };

  return (
    <div>
      <form
        onSubmit={handleOrder}
        className="flex flex-col w-full max-w-lg my-2 "
      >
        <input id='name'
          type="text"
          placeholder="Type here"
          class="input input-bordered input-accent w-full max-w-xs"
          value={user?.displayName}
        />
      
      <input
          type="text"
          placeholder="Enter Your Image Url"
          class="input input-bordered w-full max-w-xs py-2 my-2"
          id='img'
         
        />
        <div class="form-control">
          <label class="label" for="comments">
            <span class="label-text">Your  Comments</span>
          </label>
          <textarea
            name="comments"
            class="textarea textarea-bordered h-24"
            placeholder="comments"
            id="comments"
          ></textarea>

          <label class="label">
            {/* <span class="label-text-alt">Your Address</span> */}
          </label>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Star
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="star">
          <option>⭐</option>
          <option>⭐⭐</option>
          <option>⭐⭐⭐</option>
          <option>⭐⭐⭐</option>
          <option>⭐⭐⭐⭐</option>
          <option>⭐⭐⭐⭐⭐</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
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

export default AddReview;
