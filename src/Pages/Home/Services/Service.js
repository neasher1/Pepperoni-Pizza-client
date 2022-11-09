import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ product }) => {

    const { _id, name, image, price, details } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-16">
            <figure>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} alt="pizza" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{details.length > 100 ? <>{details.slice(0, 100) + '...'}</> : <>{details}</>}</p>
                <div className="card-actions flex-row justify-between mt-2">
                    <h2 className="text-2xl font-semibold text-primary">Price: ${price}</h2>
                    <Link to={`/services/${_id}`} className="btn btn-primary">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;