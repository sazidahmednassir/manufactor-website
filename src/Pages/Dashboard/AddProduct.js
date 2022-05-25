import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();

    //   if (isLoading) {
    //     return <Loading></Loading>;
    //   }

    const imgStorageKey='de50d5894b6df5da7d193384a5f4c941';

      const onSubmit = async (data) => {
          console.log(data)
          const image = data.image[0];
          const formData = new FormData();
          formData.append("image", image);
          const url= `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
          fetch(url, {
            method: "POST",
            body: formData,
          })
          .then(res=>res.json())
          .then(result=>{
              console.log(result)
              if (result.success) {
                const img = result.data.url;
                const  product = {
                    name: data.name,
                    price: data.price,
                    description: data.des,
                    availableQuantity: data.quantity,
                    minimum: data.min,
                    supplier: data.spname,
                    img: img

                };
                fetch('http://localhost:5000/product', {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                    body: JSON.stringify(product),
                  })
                  .then(res=>res.json())
                  .then(inserted=>{
                    if (inserted.insertedId) {
                        toast.success("Product added successfully");
                        reset();
                      } else {
                        toast.error("Failed to add the Product");
                        reset();
                      }
                  })
                
              }
          })
      }
    return (
        <div>
            <h1 className="my-5 text-2xl">Add a Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "Price is Required",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
        
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <textarea
            type="textarea"
            placeholder="Product Description"
            className="input input-bordered w-full max-w-xs"
            {...register("des", {
              required: {
                value: true,
                message: "Product Description is Required",
              },
            })}
          />
          <label className="label">
            {errors.des?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.des.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Available Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("quantity", {
              required: {
                value: true,
                message: "Available Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.quantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.quantity.message}
              </span>
            )}
        
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Minimum Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Minimum Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("min", {
              required: {
                value: true,
                message: "Minimum Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.min?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.min.message}
              </span>
            )}
        
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Supplier Name</span>
          </label>
          <input
            type="text"
            placeholder="Supplier Name"
            className="input input-bordered w-full max-w-xs"
            {...register("spname", {
              required: {
                value: true,
                message: "Supplier Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.spname?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.spname.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">File</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs py-2 my-2"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs text-white"
          type="submit"
          value="Add Product"
        />
      </form>
            
        </div>
    );
};

export default AddProduct;