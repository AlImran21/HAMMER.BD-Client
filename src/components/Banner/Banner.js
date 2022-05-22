import React from 'react';
import banner1 from '../../assets/images/banner1.avif';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse gap-x-64">
                <img src={banner1} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-4xl font-bold">Welcome To <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-info to-success'>HAMMER</span> Store</h1>
                    <p className="py-6">A hammer is a tool, most often a hand tool, <br /> consisting of a weighted "head" fixed to a <br /> long handle that is swung to deliver an impact <br /> to a small area of an object. This can be, <br /> for example, to drive nails into wood, to shape <br /> metal (as with a forge), or to crush rock.</p>
                    <button className="btn border-0 text-white bg-gradient-to-tr from-info to-success">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;