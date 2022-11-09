import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const ServiceDetails = () => {

    const service = useLoaderData();
    const { _id, details, image, name, price, ratings } = service;

    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const customer = form.name.value;
        const comment = form.comment.value;
        const email = user?.email;
        const img = user?.photoURL;
        console.log(img);

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
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-4/5" />
                    <br />
                    <textarea name='comment' className="textarea textarea-bordered my-5 h-40 w-4/5 " placeholder="Write a review"></textarea>
                    <br />
                    <input type="submit" className="btn btn-primary" value={"Submit"} />
                </form>
            </div>

            <div className='my-20'>
                <h2 className="text-5xl font-semibold text-center text-primary">See Our User Review</h2>
            </div>
        </div>
    );
};

export default ServiceDetails;