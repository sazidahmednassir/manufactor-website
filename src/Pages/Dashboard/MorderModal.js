import React from 'react';
import { toast } from 'react-toastify';

const MorderModal = ({deleteOrder, setDelete, control, setControl }) => {
    console.log(deleteOrder)
    const {tool, _id}=deleteOrder
    const handleDelete = () => {
        fetch(`http://localhost:5000/myorder/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                console.log('data delected')
                toast('data delected')
                setControl(!control)
            setDelete(null)
            }
            
        })
    }


    return (
        <div>
    
<input type="checkbox" id="delete-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Are you sure you want to delete  ${tool}!!</h3>
    <p class="py-4">Data will remove Permanently You will not see the data</p>
    <div class="modal-action">
    <button onClick={() => handleDelete()} class="btn ">Delete</button>
      <label for="delete-modal" class="btn">Cancel</label>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default MorderModal;