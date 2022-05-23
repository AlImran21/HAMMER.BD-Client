import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Purchase = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    return (
        <div>
            <div class="card w-80 bg-white shadow-xl mx-auto my-10">
                <figure>
                    <img style={{ width: '100%', height: '200px' }} src={products?.img} alt="" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{products?.name}</h2>
                    <p>
                        <small>{products?.description?.length < 100 ? products?.description?.length : products?.description?.slice(0, 100)}
                        </small>
                        ...
                    </p>
                    <h2 class="text-sm font-bold">Minimum Quantity: {products?.minimumQuantity}</h2>
                    <h2 class="text-sm font-bold">Available Quantity: {products?.availableQuantity}</h2>
                    <h2 class="text-sm font-bold">Price: {products?.price}</h2>
                    <button className="btn border-0 text-white bg-gradient-to-tr from-blue to-green">Purchase</button>
                </div>

            </div>
            <div className='text-center'>
                <input type="number" placeholder="Write Your Quantity" class="input input-bordered input-success input-md w-full max-w-xs my-10" />
            </div>
            <div className='text-center mb-10'>
                <button class="btn btn-success text-white">Add Quantity</button>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white mx-auto my-28">
                <div class="card-body">
                    <div class="form-control mb-3">
                        <input type="text" placeholder="Your Name" class="input input-bordered" />
                    </div>
                    <div class="form-control mb-3">
                        <input type="email" placeholder="Email Address" class="input input-bordered" />
                    </div>
                    <div class="form-control mb-3">
                        <input type="number" placeholder="Phone Number" class="input input-bordered" />
                    </div>
                    <div class="form-control mb-3">
                        <input type="text" placeholder="Address" class="input input-bordered" />
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-outline font-bold">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;