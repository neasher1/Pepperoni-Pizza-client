import React, { useEffect, useState } from 'react';
import Service from './Service';

const AllService = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://pepperoni-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
    }, [])
    console.log(products);

    return (
        <div className='my-20 max-w-screen-xl mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-primary'>Our Menu</h2>
            </div>
            <div className='grid md:grid-cols-3'>
                {
                    products.length > 0
                        ?
                        products.map(product => <Service
                            key={product._id}
                            product={product}
                        ></Service>)
                        :
                        <div className="text-3xl my-24 text-center"><progress className="progress w-56"></progress></div>
                }
            </div>
        </div>
    );
};

export default AllService;