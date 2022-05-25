import React, { useState } from 'react';
import { toast } from 'react-toastify';
import DeleteConfirmModal from './DeleteConfirmModal';

const ManageProductsRow = ({ addProduct, refetch, setDeletingProduct }) => {

    const { email, name, img, description, price, minimumQuantity, availableQuantity } = addProduct;



    return (
        <div>
            <div class="card w-80 bg-white shadow-xl">
                <figure>
                    <img style={{ width: '100%', height: '200px' }} src={img} alt="Hammer" />
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
                    <label onClick={() => setDeletingProduct(addProduct)} for="delete-confirm-modal" class="btn btn-sm btn-error w-24">Delete</label>
                </div>
            </div>
        </div>
    );
};

export default ManageProductsRow;