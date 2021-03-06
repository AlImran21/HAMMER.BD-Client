import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingProduct, refetch, setDeletingProduct }) => {

    const { name, email } = deletingProduct;

    const handleDelete = () => {
        fetch(`https://hidden-crag-33232.herokuapp.com/addProduct/${email}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.deletedCount) {
                    toast.success(`Product ${name} is delete`);
                    setDeletingProduct(null);
                    refetch();
                }

            })
    }

    return (
        <div>
            {/* <!-- The button to open modal --> */}


            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-error">Are you sure you want to delete: {name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;