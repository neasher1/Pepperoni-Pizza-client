import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const UpdateReview = () => {

    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    // console.log(data);
    const { review, _id } = data;

    const updateReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const updatedInfo = {
            message: message,
        };
        fetch(`https://pepperoni-server.vercel.app/update/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Review Updated');
                form.reset()
            })

    }

    return (
        <div className="my-20 max-w-screen-xl mx-auto w-1/2 bg-base-100 shadow-xl p-10">
            <h2 className='text-center font-bold text-primary text-3xl'>UPDATE YOUR REVIEW</h2>
            <form onSubmit={updateReview}>
                <div className='review-avatar text-center py-3'>
                    {user?.email ? <><img src={user.photoURL} alt="" /></> : <><img src={``} alt="" /></>}
                </div>
                <div>
                    <input readOnly className="input input-bordered w-1/2" defaultValue={user?.email} type="email" name='email' />
                </div>
                <div className='my-3'>
                    <h6 className='text-xl mb-2'>Edit Your Review</h6>
                    {
                        user?.email && user?.uid ? <textarea className='textarea textarea-bordered w-1/2 h-44' placeholder={review} name="message"></textarea> : <textarea className='textarea textarea-bordered w-1/2 h-44' readOnly name="message"></textarea>
                    }
                </div>
                <div>
                    <button type="submit" className='btn btn-primary'>Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;