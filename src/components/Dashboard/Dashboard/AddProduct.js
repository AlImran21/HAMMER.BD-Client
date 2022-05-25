import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';



const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const url = `http://localhost:5000/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

                if (result.insertedId) {
                    toast.success('Product added');
                    reset();
                }
                else {
                    toast.error('Failed to add product');;
                }

            });
    }



    return (
        <div className='mb-20'>
            <h1 className='font-bold text-xl text-slate-600 text-center mb-4'>Add A New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-50 mx-auto">
                    <div className="card-body">
                        <div className="form-control mb-3">
                            <input
                                type="email"
                                className="input input-bordered"
                                value={user?.email}{...register("email")}
                            />
                        </div>
                        <div className="form-control mb-3">
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })}
                            />
                        </div>
                        <div className="form-control mb-3">
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder='Minimum Quantity' {...register("minimumQuantity")}
                            />
                        </div>
                        <div className="form-control mb-3">
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder='Available Quantity' {...register("availableQuantity")}
                            />
                        </div>
                        <div className="form-control mb-3">
                            <textarea
                                class="textarea"
                                placeholder='Description' {...register("description")}
                            >
                            </textarea>
                        </div>
                        <div className="form-control mb-3">
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder='Price' {...register("price")}
                            />
                        </div>
                        <div className="form-control mb-3">
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder='Photo URL' {...register("img")}
                            />
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-outline font-bold">Add Product</button>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    );
};

export default AddProduct;