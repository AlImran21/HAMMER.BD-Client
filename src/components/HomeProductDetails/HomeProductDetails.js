import React from 'react';

const HomeProductDetails = ({ displayProduct }) => {
    const { name, img, description, price, minimumQuantity, availableQuantity } = displayProduct;

    return (
        <div class="card w-80 bg-white shadow-xl">
            <figure>
                <img style={{ width: '100%', height: '200px' }} src={img} alt="" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>
                    <small>{description.length < 100 ? description.length : description.slice(0, 100)}
                    </small>
                    ...
                </p>
                <h2 class="text-sm font-bold">Minimum Quantity: {minimumQuantity}</h2>
                <h2 class="text-sm font-bold">Available Quantity: {availableQuantity}</h2>
                <h2 class="text-sm font-bold">Price: {price}</h2>
                <button className="btn border-0 text-white bg-gradient-to-tr from-blue to-green">Purchase</button>
            </div>
        </div>
    );
};

export default HomeProductDetails;