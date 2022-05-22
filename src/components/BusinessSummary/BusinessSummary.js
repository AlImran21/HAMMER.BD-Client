import React from 'react';
import flags from '../../assets/icons/flags.png';
import responsive from '../../assets/icons/responsive.png';
import usersGroup from '../../assets/icons/users-group.png';
import like from '../../assets/icons/like.png';



const BusinessSummary = () => {
    return (
        <div>
            <h1 className='lg:text-5xl font-bold text-center mb-4 text-[#28AAA9] uppercase'>Millions Business Trust Us</h1>
            <h3 className='lg:text-3xl font-medium text-center mb-28 uppercase'>Try To Understand Users Expectation</h3>
            <div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mb-36 px-36'>
                    <div>
                        <img className='text-center' src={flags} alt="" />
                        <p className='text-6xl font-bold mt-6 mb-2 text-[#00033E] font-mono'>122</p>
                        <p className='text-[#28AAA9] text-xl font-medium'>Countries</p>
                    </div>
                    <div>
                        <img src={responsive} alt="" />
                        <p className='text-6xl font-bold mt-6 mb-2 text-[#00033E] font-mono'>535+</p>
                        <p className='text-[#28AAA9] text-xl font-medium '>Complete Projects</p>
                    </div>
                    <div>
                        <img src={usersGroup} alt="" />
                        <p className='text-6xl font-bold mt-6 mb-2 text-[#00033E] font-mono'>273+</p>
                        <p className='text-[#28AAA9] text-xl font-medium '>Happy Clients</p>
                    </div>
                    <div>
                        <img src={like} alt="" />
                        <p className='text-6xl font-bold mt-6 mb-2 text-[#00033E] font-mono'>432+</p>
                        <p className='text-[#28AAA9] text-xl font-medium '>Feedbacks</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;