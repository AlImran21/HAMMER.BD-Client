import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import ReviewsRow from './ReviewsRow';

const Reviews = () => {

    const { data: addReviews, isLoading, refetch } = useQuery('addReviews', () => fetch('https://hidden-crag-33232.herokuapp.com/addReview', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }


    return (
        <div className='mb-32 px-28'>
            <h1 className='font-bold text-cyan-500 text-center'>Testimonials</h1>
            <h1 className='font-bold text-slate-900 text-center text-3xl mb-20'>What Our Customers Says</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16'>
                {
                    addReviews.map(addReview => <ReviewsRow
                        key={addReview?._id}
                        addReview={addReview}
                        refetch={refetch}
                    ></ReviewsRow>)
                }
            </div>
        </div>
    );
};

export default Reviews;