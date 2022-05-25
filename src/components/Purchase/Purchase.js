import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import BookingModal from './BookingModal';
import PurchaseBanner from './PurchaseBanner';


const Purchase = () => {
    const [user] = useAuthState(auth);
    const { productId } = useParams();
    const [products, setProducts] = useState({});

    const [purchaseProduct, setPurchaseProduct] = useState(null);

    useEffect(() => {
        fetch(`https://hidden-crag-33232.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);



    return (
        <div>
            <PurchaseBanner />
            <div className="card w-80 bg-white shadow-xl mx-auto my-10">
                <figure>
                    <img style={{ width: '100%', height: '200px' }} src={products?.img} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{products?.name}</h2>
                    <p>
                        <small>{products?.description?.length < 100 ? products?.description?.length : products?.description?.slice(0, 100)}
                        </small>
                        ...
                    </p>
                    <h2 className="text-sm font-bold">Minimum Quantity: {products?.minimumQuantity}</h2>
                    <h2 className="text-sm font-bold">Available Quantity: {products?.availableQuantity}</h2>
                    <h2 className="text-sm font-bold">Price: {products?.price}</h2>
                    <label
                        onClick={() => setPurchaseProduct(products)}
                        for="booking-modal"
                        class="btn border-0 text-white bg-gradient-to-tr from-blue to-green"
                    >
                        Purchase
                    </label>
                </div>
            </div>
            <div className='text-center'>
                <input type="number" placeholder="Write Your Quantity" className="input input-bordered input-success input-md w-full max-w-xs my-10" />
            </div>
            <div className='text-center mb-10'>
                <button className="btn btn-success text-white">Add Quantity</button>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white mx-auto my-28">
                <div className="card-body">
                    <div className="form-control mb-3">
                        <input type="text" disabled value={user?.displayName || ''} className="input input-bordered" />
                    </div>
                    <div className="form-control mb-3">
                        <input type="email" disabled value={user?.email || ''} className="input input-bordered" />
                    </div>
                    <div className="form-control mb-3">
                        <input type="number" placeholder="Phone Number" className="input input-bordered" />
                    </div>
                    <div className="form-control mb-3">
                        <input type="text" placeholder="Address" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline font-bold">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;