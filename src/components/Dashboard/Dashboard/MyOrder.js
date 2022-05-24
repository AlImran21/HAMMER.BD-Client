import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {

        if (user) {
            fetch(`http://localhost:5000/booking?visitor=${user?.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }

    }, [user]);


    return (
        <div class="overflow-x-auto">
            <h1 className='text-slate-600 font-bold font-serif'>My Orders: {orders?.length}</h1>
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{order?.date}</td>
                            <td>{order?.visitorName}</td>
                            <td>{order?.visitor}</td>
                            <td>{order?.product}</td>
                            <td>{order?.price}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;