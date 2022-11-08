import React from 'react';
import { Link } from 'react-router-dom';

const MailingList = () => {
    return (
        <div className='text-center my-40'>
            <div>
                <h2 className="text-5xl font-bold text-primary">Join Our Mailing List!</h2>
                <p className="text-2xl my-3">For Exclusive Deals, Coupons, News and More!</p>
            </div>
            <div className='my-6'>
                <input type="email" placeholder="Enter Your Email" className="input input-bordered w-1/2" />
            </div>
            <Link className='btn btn-primary w-40'>Submit</Link>
        </div>
    );
};

export default MailingList;