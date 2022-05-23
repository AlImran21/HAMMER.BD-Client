import React from 'react';
import { useNavigate } from 'react-router-dom';




const HomeProductDetails = ({ displayProduct }) => {
    const { _id, name, img, description, price, minimumQuantity, availableQuantity } = displayProduct;
    const navigate = useNavigate();

    const handlePurchaseButton = (id) => {
        navigate(`/purchase/${id}`);
    }

    return (
        <div className="card w-80 bg-white shadow-xl">
            <figure>
                <img style={{ width: '100%', height: '200px' }} src={img} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                    <small>{description.length < 100 ? description.length : description.slice(0, 100)}
                    </small>
                    ...
                </p>
                <h2 className="text-sm font-bold">Minimum Quantity: {minimumQuantity}</h2>
                <h2 className="text-sm font-bold">Available Quantity: {availableQuantity}</h2>
                <h2 className="text-sm font-bold">Price: {price}</h2>
                <button onClick={() => handlePurchaseButton(_id)} className="btn border-0 text-white bg-gradient-to-tr from-blue to-green">Purchase</button>
            </div>
        </div>
    );
};

export default HomeProductDetails;