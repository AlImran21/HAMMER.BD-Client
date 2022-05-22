import React from 'react';
import Error404 from '../../assets/images/404.webp';

const NotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center z-0 '>
           <img src={Error404} alt="" />
        </div>
    );
};

export default NotFound;