import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const MyReviewsCard = ({ reviewInfo, handleDelete }) => {

    const { user } = useContext(AuthContext);
    const { customer, email, img, review, serviceName, _id } = reviewInfo;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div>
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Product Name: {serviceName}</h2>
                    <p>{review}</p>
                    <p className='font-semibold'>Customer: {customer}</p>
                    <div className="card-actions flex-col">
                        <p>Email: {email}</p>
                        <div className='flex justify-between'>
                            <div className='mr-20'>
                                {
                                    user?.email && user?.uid ? <><button onClick={() => handleDelete(_id)} className='btn btn-error'><FaTrashAlt></FaTrashAlt></button></> : <></>
                                }
                            </div>
                            <div>
                                <button className='btn'><Link to={`/update/${_id}`}>Edit</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default MyReviewsCard;