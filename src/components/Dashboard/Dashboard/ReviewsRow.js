import React from 'react';

const ReviewsRow = ({ addReview, refetch }) => {

    const { img, name, description, location } = addReview;

    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{description.length < 100 ? description.length : description.slice(0, 100)}</p>
                    <div className='flex items-center mt-3'>
                        <div className="avatar">
                            <div className="w-[55px] h-[55px] rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                                <img className='' src={img} alt='' />
                            </div>
                        </div>
                        <div className='ml-4'>
                            <h4 className='text-xl font-semibold'>{name}</h4>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsRow;