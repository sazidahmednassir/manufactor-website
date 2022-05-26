import React from 'react';
import { toast } from 'react-toastify';


const DeleteConfirmModal = ({deletingProduct, setDeletingProduct, control, setControl}) => {
    const {name, _id} = deletingProduct
    console.log(_id)
    const handleDelete = () => {
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product: ${name} is deleted.`)
                    setDeletingProduct(null);
                    setControl(!control)
            
                }
            })
    }


    return (
       <div >
           
         <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg text-red-600">Are you sure you want to delete  ${name}!</h3>
            <p class="py-4">Data will remove Permanently</p>
            <div class="modal-action">
            <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
            </div>
          </div>
        </div>
       </div>
       
    );
};

export default DeleteConfirmModal;