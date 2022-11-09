import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const service = useLoaderData();
    const { _id, details, image, name, price, ratings } = service;
    // console.log(service);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const comment = form.comment.value;

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
                                [...Array(ratings).keys()].map(rate => <FaStar></FaStar>)
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