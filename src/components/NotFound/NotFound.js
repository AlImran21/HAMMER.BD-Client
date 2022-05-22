import React from 'react';
import Error404 from '../../assets/images/404.webp';

const NotFound = () => {
    return (
        <div className='flex justify-center mt-28 z-0 '>
           <img className='rounded-2xl' style={{width: '400px'}} src={Error404} alt="" />
        </div>
    );
};

export default NotFound;