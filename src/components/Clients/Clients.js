import React from 'react';
import logo1 from '../../assets/icons/logo1.png';
import logo2 from '../../assets/icons/logo2.png';
import logo3 from '../../assets/icons/logo3.png';
import logo4 from '../../assets/icons/logo4.png';
import logo5 from '../../assets/icons/logo5.png';


const Clients = () => {
    return (
        <div className='mb-36'>
            <h1 className='text-4xl font-semibold text-slate-900 font-serif text-center mb-16'>Some Of Our Best Clients</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols2 sm:grid-cols-1 gap-8 px-24'>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo4} alt="" />
            </div>
        </div>
    );
};

export default Clients;