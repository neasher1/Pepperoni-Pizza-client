import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';
import { FaArrowRight } from "react-icons/fa";

const Services = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://pepperoni-server.vercel.app/home-products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
    }, [])
    // console.log(products);

    return (
        <div className='my-20 max-w-screen-xl mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-primary'>Our Menu</h2>
            </div>
            <div className='grid md:grid-cols-3'>
                {
                    products.map(product => <Service
                        key={product._id}
                        product={product}
                    ></Service>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to='/services' className='btn btn-primary'>View Services <FaArrowRight></FaArrowRight> </Link>
            </div>
        </div>
    );
};

export default Services;