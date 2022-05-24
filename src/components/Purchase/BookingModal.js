import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { format } from 'date-fns';
import { toast } from 'react-toastify';

const BookingModal = ({ date }) => {
    const [user] = useAuthState(auth);
    const { productId } = useParams();
    const [products, setProducts] = useState({});
    const { _id, name, price } = products;

    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const formattedDate = format(date, 'PP');

    const handleBooking = (event) => {
        event.preventDefault();
        const phone = event?.target?.phone?.value;
        const address = event?.target?.address?.value;
        console.log(name, phone, address);
        event.target.reset();

        const booking = {
            productId: _id,
            product: name,
            date: formattedDate,
            visitor: user?.email,
            visitorName: user?.displayName,
            price,
            phone: event?.target?.phone?.value,
            address: event?.target?.address?.value

        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.success) {
                    toast.success(`Order is set, ${formattedDate}`);
                }
                else {
                    toast.error(`Already have an order on, ${data?.booking?.date}`);
                }

            })

    }



    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-green-500 text-center mb-4">Product Name: {products?.name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input
                            type="text"
                            value={format(date, 'PP')}
                            disabled
                            class="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="text"
                            name='name'
                            value={user?.displayName || ''}
                            disabled
                            class="input input-bordered w-full max-w-xs"
                        />

                        <input
                            type="email"
                            name='email'
                            value={user?.email || ''}
                            disabled
                            class="input input-bordered w-full max-w-xs"
                        />

                        <input
                            type="number"
                            name='phone'
                            placeholder='Phone'
                            class="input input-bordered w-full max-w-xs"
                        />

                        <input
                            type="text"
                            name='address'
                            placeholder='Address'
                            class="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="submit"
                            value='Place Order'
                            class="btn  w-full max-w-xs my-2 text-white bg-gradient-to-tr from-blue to-green font-semibold"
                        />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;