import React from 'react';
import man1 from '../../assets/images/man1.png';


const Quality = () => {
    return (
        <div className="hero min-h-screen bg-base-100 mb-36">
            <div className="hero-content flex-col lg:flex-row gap-x-64">
                <img src={man1} className="max-w-sm rounded-lg" alt='' />
                <div>
                    <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-info to-success'>Higher Quality</h1>
                    <p className="py-6">Company works with homeowners, contractors, <br /> realtors, and residential building managers to help <br /> maintain, upgrade, and repair properties</p>
                    <button className="btn rounded border-0 bg-accent text-white">Visit Now</button>
                </div>
            </div>
        </div>
    );
};

export default Quality;