import React from 'react';
import useDisplayProducts from '../../hooks/useDisplayProducts';
import HomeProductDetails from '../HomeProductDetails/HomeProductDetails';

const HomeProduct = () => {

    const [displayProducts, setDisplayProducts] = useDisplayProducts();


    return (
        <div className='bg-base-100'>
            <h2 className='text-4xl text-center mb-20 font-bold text-primary'>Our Products</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 px-24 mb-36'>
                {
                    displayProducts.map(displayProduct => <HomeProductDetails
                        key={displayProduct.id}
                        displayProduct={displayProduct}
                    ></HomeProductDetails>)
                }
            </div>
        </div>
    );
};

export default HomeProduct;