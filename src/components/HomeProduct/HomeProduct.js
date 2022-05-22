import React from 'react';
import useDisplayProducts from '../../hooks/useDisplayProducts';
import HomeProductDetails from '../HomeProductDetails/HomeProductDetails';

const HomeProduct = () => {

    const [displayProducts, setDisplayProducts] = useDisplayProducts();


    return (
        <div className='bg-base-100 px-24'>
            <h2 className='text-4xl text-center mb-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00A36C] to-primary font-serif'>Our Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 mb-36'>
                {
                    displayProducts.map(displayProduct => <HomeProductDetails
                        key={displayProduct._id}
                        displayProduct={displayProduct}
                    ></HomeProductDetails>)
                }
            </div>
        </div>
    );
};

export default HomeProduct;