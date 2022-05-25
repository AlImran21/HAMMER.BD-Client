import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ManageProductsRow from './ManageProductsRow';

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const { data: addProducts, isLoading, refetch } = useQuery('addProducts', () => fetch('http://localhost:5000/addProduct', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <h1 className='font-bold text-slate-600 text-xl mb-4'>All Products: {addProducts?.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 mb-36'>
                {
                    addProducts.map(addProduct => <ManageProductsRow
                        key={addProduct?._id}
                        addProduct={addProduct}
                        refetch={refetch}
                        setDeletingProduct={setDeletingProduct}
                    >

                    </ManageProductsRow>)
                }
            </div>
            {
                deletingProduct && <DeleteConfirmModal
                    deletingProduct={deletingProduct}
                    refetch={refetch}
                    setDeletingProduct={setDeletingProduct}
                />
            }
        </div>
    );
};

export default ManageProducts;