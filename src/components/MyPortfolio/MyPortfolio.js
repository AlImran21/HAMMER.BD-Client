import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-2xl mx-auto mt-20 mb-20">
            <div className="card-body">
                <h2 className="card-title">Name: Al-Imran</h2>
                <p><span className='font-semibold'>Email:</span> alimran21feb@gmail.com</p>
                <p><span className='font-semibold'>Educational Background:</span> I am a second year student of Psychology Department of Chittagong City College.</p>
                <p><span className='font-semibold'>All the technology I know:</span></p>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT.JS</li>
                <li>NODE.JS</li>
                <li>MONGODB</li>
                <p><span className='font-semibold'>The latest 3 projects I have done are:</span></p>
                <li>
                    <a href='https://my-assignment-11-with-node.web.app/' target='_blank' className='text-orange-800'>Fruit's Warehouse</a>
                </li>
                <li>
                    <a href="https://my-assignment10-with-react.web.app/" target='_blank' className='text-green-700'>Wild Photographer</a>
                </li>
                <li>
                    <a href="https://my-assignment-9-with-react-router.netlify.app/" target='_blank' className='text-purple-600'>A Book Reviewed</a>
                </li>
            </div>
        </div>
    );
};

export default MyPortfolio;