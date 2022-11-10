import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews?email=${user?.email}`, {
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user.email]);
    // delete user
    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/my-reviews/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('User Review Delete Successfully')
                    const remainingReviews = myReviews.filter(review => review._id !== id);
                    setMyReviews(remainingReviews)
                }
            })
    }

    return (
        <div className='my-10'>
            {
                myReviews.length > 0 ? <><h2 className='text-center font-semibold text-primary text-3xl'>MY REVIEWS</h2></> : <><div className='py-5 my-5'><h2 className='text-center py-5 my-5'>This User Have No Review</h2></div></>
            }
            <div className='my-20 max-w-screen-xl mx-auto grid md:grid-cols-3'>
                {
                    myReviews.map(review => <MyReviewsCard key={review._id} handleDelete={handleDelete} reviewInfo={review}></MyReviewsCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;