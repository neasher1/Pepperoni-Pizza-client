import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import ReviewInServiceDetails from './ReviewInServiceDetails';

const ServiceDetails = () => {

    const service = useLoaderData();
    const { _id, details, image, name, price, ratings } = service;

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const customer = form.name.value;
        const comment = form.comment.value;
        const email = user?.email;
        const img = user?.photoURL;
        // console.log(img);

        const review = {
            service: _id,
            serviceName: name,
            customer: customer,
            review: comment,
            email,
            img
        }

        fetch('http://localhost:5000/add-review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Review added successfully");
                    form.reset();
                }
            })
            .catch(error => console.log(error))

    }

    useEffect(() => {

        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error))

    }, [])

    return (
        <div>
            <div className='grid md:grid-cols-2 gap-20 max-w-screen-xl mx-auto my-20 items-center'>
                <div className="card glass">
                    <figure><img style={{ width: "500px" }} src={image} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{details}</p>

                        <div className="card-actions flex-row items-center ">
                            <p className='text-2xl font-semibold'>Price: ${price}</p>
                            {
                                [...Array(ratings).keys()].map(rate => <FaStar key={rate}></FaStar>)
                            }
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    {
                        user?.uid
                            ?
                            <>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-4/5" />
                                <br />
                                <textarea name='comment' className="textarea textarea-bordered my-5 h-40 w-4/5 " placeholder="Write a review"></textarea>
                            </>
                            :
                            <h2 className="text-4xl">Please Login to Add Review</h2>
                    }
                    <br />
                    {
                        user?.uid
                            ?
                            <input type="submit" className="btn btn-primary" value={"Submit"} />
                            :
                            <Link className='btn btn-primary' to='/login'>Please Login</Link>
                    }
                </form>
            </div>

            <div className='my-20'>
                <h2 className="text-5xl font-semibold text-center text-primary">See Our User Review</h2>

                <div className='max-w-screen-xl mx-auto grid md:grid-cols-3 gap-5 my-14'>
                    {
                        reviews.map(review => <ReviewInServiceDetails
                            key={review._id}
                            review={review}
                        ></ReviewInServiceDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;