import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1EKoHBAx0SM4y8nZSBFQVoM4KMJ2nLFbCcPBLD7xvyy9fH6oj4HOQSAGFEipduFGVXI5LOmBDJXbLGsgUJqZlp00yhRBudJZ');


const Payment = () => {

    const { id } = useParams();
    const url = `https://hidden-crag-33232.herokuapp.com/booking/${id}`;

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-10">
                <div class="card-body">
                    <h2 class="card-title text-[#635BFF] text-[17px]">Date: <>{order?.date}</></h2>
                    <h2 class="card-title text-[#635BFF] text-[17px]">Pay for: <>{order?.product}</></h2>
                    <p className='card-title text-[#635BFF] text-[17px]'>Please pay: <>{order?.price}</></p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;