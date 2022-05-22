import React from 'react';
import banner1 from '../../assets/images/banner1.avif';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse gap-x-72">
                <img src={banner1} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">A hammer is a tool, most often a hand tool, <br /> consisting of a weighted "head" fixed to a long <br /> handle that is swung to deliver an impact to a <br /> small area of an object. This can be, for example, <br /> to drive nails into wood, to shape metal <br /> (as with a forge), or to crush rock.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;