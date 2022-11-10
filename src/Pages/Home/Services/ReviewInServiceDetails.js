import React from 'react';
import { FaChild } from 'react-icons/fa';

const ReviewInServiceDetails = ({ review }) => {

    const { img, serviceName, customer, email, service } = review;
    // console.log(review);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                {
                    email ?
                        <img src={img} alt="" className="rounded-xl" />
                        :
                        <FaChild></FaChild>
                }
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Product Name: {serviceName}</h2>
                <p>Customer Name: {customer}</p>
                <p>Review: {review.review}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default ReviewInServiceDetails;