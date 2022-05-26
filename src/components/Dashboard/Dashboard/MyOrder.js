import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {

        if (user) {
            fetch(`https://hidden-crag-33232.herokuapp.com/booking?visitor=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => {
                    console.log('res', res);

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }

                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                })
        }

    }, [user]);


    return (
        <div class="overflow-x-auto">
            <h1 className='text-slate-600 font-bold font-serif mb-2'>My Orders: {orders?.length}</h1>
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr key={order?._id}>
                            <th>{index + 1}</th>
                            <td>{order?.date}</td>
                            <td>{order?.visitorName}</td>
                            <td>{order?.visitor}</td>
                            <td>{order?.product}</td>
                            <td>{order?.price}</td>
                            <td>
                                {
                                    (order?.price && !order?.paid)
                                    &&
                                    <Link to={`/dashboard/payment/${order?._id}`}>
                                        <button className='px-3 rounded-full bg-green-500 text-white'
                                        >
                                            Pay
                                        </button>
                                    </Link>
                                }
                                {
                                    (order?.price && order?.paid)
                                    &&
                                    <div>
                                        <p className=' text-green-500 font-semibold'
                                        >
                                            Paid
                                        </p>
                                        <span className='text-info font-bold'>Transaction Id: {order?.transactionId}</span>
                                    </div>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;