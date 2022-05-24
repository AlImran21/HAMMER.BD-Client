import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import man1 from '../../assets/images/man1.png';
import BookingModal from './BookingModal';



const PurchaseBanner = () => {
    const [date, setDate] = useState(new Date());


    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={man1} class="max-w-sm rounded-lg" alt='' />
                <div className='mr-40'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p className='text-slate-900 font-semibold'>Your Purchase Date: <span className='text-green-500 font-semibold'>{format(date, 'PP')}</span></p>
                </div>
            </div>
            {
                date && <BookingModal date={date} />
            }
        </div>
    );
};

export default PurchaseBanner;